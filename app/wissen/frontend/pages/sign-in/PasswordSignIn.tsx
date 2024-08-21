export { PasswordSignIn };
import { execute, graphql } from "@/helpers/gql";
import { Button, Input, rgba, styled } from "@jon-zuka/solidjs-ui";
import { Type, type Static } from "@sinclair/typebox";
import { TypeCompiler } from "elysia/type-system";

import { createEffect, createSignal, Show } from "solid-js";
import { navigate } from "vike/client/router";

const securePasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const PasswordSchema = Type.String({
  pattern: securePasswordRegex.source, // Use the regex pattern
  minLength: 8, // Ensure a minimum length of 8 characters
});
const validatePassword = TypeCompiler.Compile(PasswordSchema);

const EmailSchema = Type.String({
  format: "email",
});
const validateEmail = TypeCompiler.Compile(EmailSchema);

// const T = Type.Object({
//   email: Type.String({
//     format: 'email'
//   }),
//   password: Type.String({
//     pattern
//   })
// })

const Alert = styled("div")`
  color: ${({ theme }) => rgba(theme!.colors.danger, 1)};
  background-color: ${({ theme }) => rgba(theme!.colors.danger, 0.2)};
  border-radius: ${({ theme }) => theme?.shapes.bevel};
  padding: 10px 2px;
`;

const StyledDiv = styled("div")`
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;



function PasswordSignIn() {

  const [values, setValues] = createSignal({
    email: "",
    password: "",
  });

  const [error, setError] = createSignal("");

  const errors = () => ({
    email: values().email === "" || validateEmail.Check(values().email)
      ? ""
      : "Please provide a valid E-mail",
    password: values().password === "" || validatePassword.Check(values().password)
      ? ""
      : "Please choose a strong password.",
  });

  const onChange = (values: { email?: string; password?: string }) => {
    const updatedValues: { [key: string]: string } = {};
    Object.entries(values).filter(([key, value]) => {
      if (typeof value === "string") {
        updatedValues[key] = value;
      }
    });
    setValues((prev) => ({ ...prev, ...updatedValues }));
  };

  return (
    <StyledDiv>
      <form
        onSubmit={async (e: Event) => {
          setError("");
          try {
            e.preventDefault();
            console.log(values());
            // await execute(SignInWithPasswordMutation, {
            //   input: values(),
            // });
            navigate('/')
          } catch (e: any) {
            console.error(e.message);
            setError(e.message);
          }
        }}
      >
        <Input
          label="Email"
          value={values().email}
          color="text"
          onChange={(email) => onChange({ email })}
          error={errors().email}
        />
        <Input
          password
          label="Password"
          value={values().password}
          color="text"
          onChange={(password) => onChange({ password })}
          error={errors().password}
        />
        <Show when={error()}>
          <Alert
            style={{
              margin: ".5rem 0",
            }}
          >
            {error()}
          </Alert>
        </Show>
        <Button color="primary" type="submit" variant="contained">
          Sign in
        </Button>
        <div>
          Need an account?{" "}
          <Button type="button" variant="text" color="primary">
            Sign up
          </Button>
        </div>
        <div>
          Forgot your password?{" "}
          <Button type="button" variant="text" color="primary">
            Reset it
          </Button>
        </div>
      </form>
    </StyledDiv>
  );
}
