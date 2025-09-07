import Header from "./Header"
import Hero from "./Hero"

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />  {/* Aquí aparece la sección con la imagen de fondo */}
      <h2 className='text-3xl font-bold underline mt-6'>Home</h2>
    </>
  )
}
