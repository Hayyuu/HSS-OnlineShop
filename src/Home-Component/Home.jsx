import styles from './Home.module.css'
export default function Home(){
    return (
        <div className='home'>
            <div className='discConatiner'>
                <h1 className='h1'>HSS Shop</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nobis fugiat quisquam reiciendis nihil laborum facere voluptatum ducimus nesciunt, veritatis repellendus illo aperiam ullam, saepe soluta ut fuga neque! Corporis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nisi temporibus, fuga totam possimus eaque, provident adipisci, officia neque dolore aliquid beatae. Illo eveniet quod quasi assumenda quia illum recusandae.</p>
             </div>
            <section>
                <div>
                    <img src='../src/assets/home.jpg' alt="store" />
                    <img src='../src/assets/1.jpg' alt="makeup" />
                        
                </div>
                <div>
                <img src='../src/assets/2.jpg' alt="makeup" />
                <img src='../src/assets/3.jpg' alt="makeup" />
                </div>
            </section>
            
        </div>

    );
}    