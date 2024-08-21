import { createSignal } from "solid-js";

export { useAudio };

function useAudio() {
  const [audio, setAudio] = createSignal<HTMLAudioElement>();
  const [sound, setSound] = createSignal("");

  const playSound = (sound: string, times: number = 1) =>
    new Promise<void>(async(resolve) => {
      setSound(sound)
      if (times < 1) return;
      const handleEnded = async () => {
        audio()?.removeEventListener("ended", handleEnded);
        await playSound(sound, times - 1);
        resolve();
        return;
      };
      audio()?.play();
      audio()?.addEventListener("ended", handleEnded);
    });
  return {
    audioComponent: <audio ref={setAudio} src={sound()}></audio>,
    setSound,
    playSound,
  };
}
