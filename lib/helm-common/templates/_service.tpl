{{- define "common.service" }}
apiVersion: v1
kind: Service
metadata:
  name: {{ include "common.fullname" . }}
  labels:
    {{- include "common.labels" . | nindent 4 }}
spec:
  type: {{ .Values.service.type }}
  ports:
    - port: {{ .Values.service.port }}
      targetPort:  {{ .Values.service.containerPort }}
      protocol: TCP
  selector:
    {{- include "common.selectorLabels" . | nindent 4 }}
{{- end }}