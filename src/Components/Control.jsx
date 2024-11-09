import { controls } from '../Data/dummy'
import '../Styles/control.scss'

function Control() {
  return (
    <div className='feature__controls'>
        <div className="control__container">
            <div className="control__text">
                <h1>Control in one place</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat molestias vel corrupti suscipit! Reprehenderit vero odio temporibus totam ex, nulla dolore alias..
                </p>
                <button>Starts 14 days trial</button>
            </div>

            <div className="control__content">
                {
                    controls.map((control, index) =>(
                        <div className="control" key={index}>
                            <div className="control__icon">
                                <control.icon/>
                            </div>

                            <div className="control__text__content">
                                <p>{control.name}</p>
                                <span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum incidunt rem veniam iure eveniet? Quidem recusandae delectus earum vero nobis?
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Control