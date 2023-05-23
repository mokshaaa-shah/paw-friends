import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div class="home">

            <div class="content">
                <h1>sponsor an animal</h1>


                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ducimus harum corrupti perspiciatis
                    corporis
                    fugiat nesciunt quaerat esse, magni quod debitis consequuntur exercitationem quae quo deserunt iusto rem
                    velit soluta.</p>
                <Link to="/signin" class="btn1">DONATE</Link>

            </div>
        </div>
    )
}