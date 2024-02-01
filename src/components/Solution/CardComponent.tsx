import Styles from '../../App.module.css';

interface Props {
    image_src: string,
    titel: string,
    card_text: string,
}


export default function CardComponent({image_src, titel, card_text}: Props) {
    return (
        <div className={Styles.infoCard}>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className={Styles.overwriteWithNothing}>
                    <div className="card">
                        <img src={image_src} className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">{titel}</h5>
                            <p className="card-text">{card_text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}