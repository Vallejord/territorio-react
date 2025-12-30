#!/bin/bash

# Script de deploy para Cloud Run
# Monitorea cada paso y muestra progreso

set -e  # Salir si hay error

PROJECT_ID="territorio-web"
SERVICE_NAME="territorio-contact"
REGION="southamerica-east1"
IMAGE_NAME="gcr.io/${PROJECT_ID}/${SERVICE_NAME}"

echo "🚀 Iniciando deploy a Cloud Run..."
echo "📦 Proyecto: ${PROJECT_ID}"
echo "🌍 Región: ${REGION}"
echo "📝 Servicio: ${SERVICE_NAME}"
echo ""

# Paso 1: Build de imagen Docker
echo "📦 Paso 1/4: Construyendo imagen Docker..."
gcloud builds submit --tag ${IMAGE_NAME} --project ${PROJECT_ID} --timeout=10m
echo "✅ Imagen construida"
echo ""

# Paso 2: Deploy a Cloud Run
echo "🚀 Paso 2/4: Desplegando a Cloud Run..."
gcloud run deploy ${SERVICE_NAME} \
  --image ${IMAGE_NAME} \
  --platform managed \
  --region ${REGION} \
  --project ${PROJECT_ID} \
  --allow-unauthenticated \
  --set-secrets="GMAIL_USER=GMAIL_USER:latest,GMAIL_PASS=GMAIL_PASS:latest" \
  --memory=512Mi \
  --cpu=1 \
  --timeout=60 \
  --max-instances=10 \
  --min-instances=0
echo "✅ Deploy completado"
echo ""

# Paso 3: Obtener URL
echo "🔗 Paso 3/4: Obteniendo URL del servicio..."
SERVICE_URL=$(gcloud run services describe ${SERVICE_NAME} --region ${REGION} --project ${PROJECT_ID} --format 'value(status.url)')
echo "✅ URL obtenida: ${SERVICE_URL}"
echo ""

# Paso 4: Test de health check
echo "🏥 Paso 4/4: Probando health check..."
curl -f ${SERVICE_URL}/health || echo "⚠️ Health check falló"
echo ""

echo "✅ Deploy completado exitosamente!"
echo "🔗 URL del servicio: ${SERVICE_URL}"
echo "📧 Endpoint: ${SERVICE_URL}/submitContact"




