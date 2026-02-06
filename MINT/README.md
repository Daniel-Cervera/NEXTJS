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
```

# 🐚 Optimización de Terminal: Zsh + Oh My Zsh

> **Descripción:** Guía para reemplazar la terminal Bash por defecto en Linux Mint por una configuración avanzada de Zsh, optimizada con plugins de productividad y temas visuales.

---

## 🛠️ Herramientas a Instalar
| Herramienta | Función |
| :--- | :--- |
| **Zsh** | El shell interactivo (alternativa a Bash) |
| **Oh My Zsh** | Framework para gestionar la configuración de Zsh |
| **Plugins** | Autosuggestions y Syntax Highlighting |

---

## 🚀 Proceso de Instalación

### 1. Instalar Zsh y cambiar el Shell por defecto
Abre tu terminal actual y ejecuta:
```bash
sudo apt update
sudo apt install zsh -y

# Cambiar el shell por defecto (requiere cerrar sesión después)
chsh -s $(which zsh)
```

### 2. Instalar Oh my Zsh

```bash
sh -c "$(curl -fsSL [https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh](https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh))"
```

### 3. Instalacion de pluggins esenciales 
Estos pluggins nos sirven para ahorrarnos

```bash
# Zsh Autosuggestions
git clone [https://github.com/zsh-users/zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

# Zsh Syntax Highlighting
git clone [https://github.com/zsh-users/zsh-syntax-highlighting.git](https://github.com/zsh-users/zsh-syntax-highlighting.git) ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

### 4. Configuracion del archivo .zshrc 
Edita tu configuracion (nano ~/.zshrc) y buscas la linea de pluggins para que quede asi:

```bash
plugins=(git zsh-autosuggestions zsh-syntax-highlighting node npm)
```
