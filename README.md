# Distribuidora Casa Vázquez — Guía rápida para el dueño

Este sitio web es **estático, simple y seguro**:
sólo usa HTML, CSS y JavaScript puro. **No** tiene base de datos, **no** guarda
datos de clientes, **no** cobra pagos, **no** tiene login y **no** usa rastreadores.

---

## 1) Cómo reemplazar los datos (paso a paso)

Todo lo que debes cambiar aparece **resaltado en amarillo** en la página, con corchetes,
por ejemplo: `[ESCRIBIR HORARIO AQUÍ]`. Sólo busca esos textos y escríbelos con tus datos reales.

### a) Número de WhatsApp
- En todos los archivos el número de ejemplo es `5210000000000`.
- Es tu número **con la clave de país 52** (México), sin espacios, sin signos y sin el "+".
  Ejemplo: si tu número es 33 1234 5678, se escribe `523312345678`.
- Cómo cambiarlo fácil: abre cada archivo `.html` con un editor de texto, usa
  "Buscar y reemplazar", busca `5210000000000` y reemplázalo por tu número real. Repite en los 5 archivos HTML.

### b) Dirección, teléfono, correo y horario
- Abre `contacto.html` y reemplaza los textos entre corchetes:
  `[ESCRIBIR DIRECCIÓN COMPLETA AQUÍ]`, `[ESCRIBIR NÚMERO DE WHATSAPP AQUÍ]`,
  `[ESCRIBIR CORREO AQUÍ]`, `[ESCRIBIR HORARIO AQUÍ]`.
- En el pie de página (footer) de todos los archivos también hay `[DIRECCIÓN]`, `[NÚMERO]`, `[CORREO]`.
- En `index.html` hay `[HORARIO]` y la zona de servicio `[ESCRIBIR AQUÍ LA CIUDAD...]`.

### c) Mapa de Google
1. Entra a Google Maps y busca tu negocio.
2. Botón **Compartir → Insertar un mapa**.
3. Copia el código que empieza con `<iframe ...>`.
4. En `contacto.html`, reemplaza `[PEGAR CÓDIGO DE GOOGLE MAPS AQUÍ]` por ese código.

### d) Catálogo Pulpos
- En `catalogo.html`, el botón usa el enlace de ejemplo `https://example.com/catalogo-pulpos`.
- Reemplázalo por el enlace real de tu catálogo Pulpos.

### e) Redes sociales
- En `contacto.html`, los enlaces de Facebook, Instagram y TikTok tienen `href="#"`.
- Reemplaza el `#` por la dirección real de cada red.

### f) Imágenes (las cambias tú)
Coloca tus propias fotos en la carpeta `images/` con **exactamente** estos nombres:
- `logo-dcv.png` → tu logotipo
- `fachada.jpg` → foto de la fachada / letrero de la tienda
- `interior.jpg` → foto del interior de la tienda
- `productos.jpg` → foto de productos surtidos
- `herramientas.jpg` → foto de herramientas

Usa **sólo fotos propias**. No uses fotos de marcas ni del catálogo Pulpos.

---

## 2) Lista de revisión antes de publicar

- [ ] Cambié el número `5210000000000` por mi WhatsApp real en los 5 archivos HTML.
- [ ] Llené dirección, teléfono, correo y horario en `contacto.html`.
- [ ] Llené los datos del pie de página (footer) en todas las páginas.
- [ ] Puse el enlace real del catálogo Pulpos en `catalogo.html`.
- [ ] Pegué el mapa de Google en `contacto.html`.
- [ ] Puse los enlaces reales de mis redes sociales.
- [ ] Agregué mis 5 imágenes propias en la carpeta `images/` con los nombres correctos.
- [ ] Revisé que no queden textos entre corchetes `[ ]` sin llenar.
- [ ] Abrí el sitio en un celular para confirmar que se ve bien.
- [ ] Probé todos los botones de WhatsApp (que abran el chat con mi número).
- [ ] Confirmé que el formulario de contacto todavía **no** envía (avisa que se usa WhatsApp).
- [ ] Revisé la ortografía y que los datos sean correctos.

---

## 3) Información privada que NO debes dar a la IA (ni poner en el código)

Nunca compartas ni pegues en el sitio:
- Contraseñas de tu correo, redes sociales, hosting o dominio.
- Datos de acceso (usuario/contraseña) de cualquier plataforma.
- Números de tarjeta, cuentas bancarias o CLABE.
- Llaves de API, tokens o claves secretas.
- Datos personales de clientes (nombres, teléfonos, direcciones).
- Documentos oficiales (INE, RFC con datos sensibles, etc.).

Tu número de WhatsApp y la dirección de la tienda **sí** son públicos (van en el sitio),
pero contraseñas y llaves secretas **jamás**.

---

## Nota sobre el formulario de contacto

El formulario en `contacto.html` es **sólo visual**: por ahora no envía mensajes.
Para que funcione de forma segura, un desarrollador debe conectarlo a un
servicio confiable de formularios (por ejemplo Formspree, Basin o Getform) o a un
backend seguro. Mientras tanto, el contacto principal es por **WhatsApp**.
