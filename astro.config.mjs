import { defineConfig } from 'astro/config';
import icon from 'astro-icon'; // 1. Importa el paquete

export default defineConfig({
  integrations: [
    icon(), // 2. Agrégalo al array de integraciones
  ],
});