import style from "./Home.module.css"

export default function Home(){

    return(
        <div className={style.container}>
            <p className={style.name} >amir.gharibipour@spaceconcordia.ca</p>   


            <div className={style.table}>
                <div className={style.header}>
                    <div>
                        Title
                    </div>
                    <div>
                        Email
                    </div>
                    <div>
                        Date
                    </div>
                    <div>
                        Actions
                    </div>
                </div>
                <div className={style.row}>
                    <div>
                        When Are you going to start backend
                    </div>
                    <div>
                        amir.gharibipour@spaceconcordia.ca
                    </div>
                    <div>
                        5/11/2024
                    </div>
                    <div>
                        <button>Reply</button>
                        <button>Delete</button>
                        <button>Flag</button>
                        <button>Hide</button>
                    </div>
                </div>
                
            </div>

        </div>
    )
}