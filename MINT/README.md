# 🖥️ Configuración de Entorno: VM Linux Mint

> **Descripción:** Guía técnica para el despliegue de una máquina virtual optimizada para el desarrollo web (Next.js/Node.js) utilizando VirtualBox y Linux Mint.

---

## 🛠️ Requisitos del Sistema (Host)
Para asegurar un rendimiento fluido durante la compilación de proyectos, se recomiendan los siguientes specs en la máquina física:
* **RAM:** 16 GB (para asignar 8 GB a la VM).
* **Procesador:** CPU con soporte VT-x/AMD-V habilitado.
* **Almacenamiento:** SSD con al menos 50 GB libres.

## 📦 Especificaciones de la VM
| Parámetro | Configuración Recomendada |
| :--- | :--- |
| **SO** | Linux Mint 21.x (Cinnamon/XFCE) |
| **Base OS** | Ubuntu (64-bit) |
| **vCPU** | 2 o 4 Núcleos |
| **vRAM** | 4096 MB - 8192 MB |
| **VRAM (Video)** | 128 MB (Aceleración 3D activa) |
| **Disco Virtual** | 40 GB - 60 GB (VDI Dinámico) |

---

## 🚀 Guía de Instalación Paso a Paso

### 1. Aprovisionamiento en VirtualBox
1. Crear una nueva instancia con el nombre `Dev-Mint`.
2. Asignar recursos según la tabla de especificaciones anterior.
3. En **Almacenamiento**, cargar la ISO de Linux Mint en el controlador IDE/SATA.
4. Configurar la **Red** en modo *NAT* o *Adaptador Puente* (según necesidad de visibilidad en la LAN).

### 2. Instalación del Sistema Operativo
1. Iniciar la VM y seleccionar `Install Linux Mint`.
2. **Importante:** Marcar la casilla "Instalar códecs multimedia" para evitar problemas de compatibilidad.
3. Al finalizar, instalar las **Guest Additions**:
   - `Dispositivos` > `Insertar imagen de CD de las Guest Additions`.
   - Ejecutar el script y reiniciar para habilitar el portapapeles compartido.



### 3. Setup de Desarrollo (Next.js Ready)
Una vez dentro del sistema, ejecutar los siguientes comandos para preparar el entorno de Node:

```bash
# Actualizar repositorios
sudo apt update && sudo apt upgrade -y

# Instalar NVM (Node Version Manager)
curl -o- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh) | bash

# Instalar Node.js LTS
nvm install --lts

# Verificar versiones
node -v && npm -v
