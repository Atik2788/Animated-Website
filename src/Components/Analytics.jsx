import { analytics } from '../Data/dummy'

const Analytics = () => {
  return (
    <div className="app__analytics">
      <div className="analytics__analytics">
          <div className="left__analytics">

            <div className="left__text">
              <h1>Okey, let's see D'task in numbers</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima quam, ipsa expedita iste esse dolor enim odio, impedit mollitia consequatur quas totam distinctio nesciunt exercitationem asperiores aliquid fuga sapiente?</p>
            </div>
            <div className="left__analytics__container">
                {analytics.map((analytic, index)=>(
                    <div className="analytic__container" key={index}>
                      <div className="analytics__icon">{analytic.desc}</div>
                      <p>{analytic.name}</p>
                    </div>
                ))}
            </div>
            
          </div>
          <div className="right__analytics"></div>
      </div>
    </div>
  )
}

export default Analytics