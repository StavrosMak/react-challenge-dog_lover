import { Link } from 'react-router-dom';
import './Banner.css';

export default function Banner() {

    return (
        <section className="Banner">
            <div className="Banner-content">
                  <Link to="/list">
                    <button>Discover more dogs</button>
                </Link>
            </div>
        </section>

    )


}