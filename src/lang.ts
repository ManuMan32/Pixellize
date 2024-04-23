import { useGlobalContext } from "./globalContext"
const lang = (key: number) => {
  const { actualLanguage } = useGlobalContext();
  switch (actualLanguage) {
    default:
    case "en":
      switch(key) {
        case 0: return "New"
        case 1: return "Galery"
        case 2: return "Guide"
        case 3: return "Options"
        case 4: return "Create a new project"
        case 5: return "See your creations or edit them"
        case 6: return "Learn how to use the editor"
        case 7: return "Customize the page to your liking"
        default: return `Translation error, key: ${key}`
      }
    case "es":
      switch(key) {
        case 0: return "Nuevo"
        case 1: return "Galeria"
        case 2: return "Guía"
        case 3: return "Opciones"
        case 4: return "Crea un nuevo proyecto"
        case 5: return "Mira tus creaciones y editalas"
        case 6: return "Aprende a usar el editor"
        case 7: return "Configura la página a tu gusto"
        default: return `Error de traducción, key: ${key}`
      }
  }
}
export default lang;