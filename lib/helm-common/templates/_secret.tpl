{{- define "common.secret" }}
apiVersion: v1
kind: Secret
metadata:
  name: {{ include "common.fullname" . }}
  labels:
    {{- include "common.labels" . | nindent 4 }}
data:
  payload: {{ .Values.secret.payload }}
{{- end }}

{{- define "common.secretVolume" }}
- name: secret
  secret:
    secretName: {{ include "common.fullname" . }}
    optional: false
    items:
      - key: payload
        path: payload
{{- end }}

{{- define "common.secretVolumeMount" }}
- name: secret
  mountPath: {{ .Values.secret.mountPath }}
  subPath: payload
  readOnly: true
{{- end }}
