import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/imagenes/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.linkedin.com/in/georgina-aguilar-8bb755270/'>
            <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href='https://github.com/Gina456/'>
            <i class="fa-brands fa-github"></i> 
            </a>
            <a href='https://www.instagram.com/gina78658/'>
                <img src="/imagenes/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='./imagenes/logo.png' alt='org' />
        <strong>Desarrollado por Ikigai</strong>
        <img  className="logoGina" src="/imagenes/logoGina.png" alt="" />
    </footer>


}
export default  Footer    