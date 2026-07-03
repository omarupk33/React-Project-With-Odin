import cvImage from './assets/cv.png'

function Header(){
    return (
        <header>
            <img src={cvImage} alt="cv icon" />
            <h1>
                CV Maker
            </h1>
        </header>
    )
}

export default Header 