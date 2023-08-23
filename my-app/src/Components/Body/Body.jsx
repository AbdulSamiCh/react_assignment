import "./Body.css";

const Body = () => {
  return (
    <div className="body">
      <div className="content">
        <h2>Inspiring Quotes by People</h2>
        <p>"The only way to do great work is to love what you do." - Steve Jobs.</p>
      </div>

      <div className="middle">
        <h2>Quotes</h2>
        <div className="card">
          <h3>Quote 1</h3>
          <p>The unexamined life is not worth living" <br /> - Socrates.
          </p>
        </div>
        <div className="card">
          <h3>Quote 2</h3>
          <p>"Life is like riding a bicycle. To keep your balance, you must keep moving" <br /> -Albert Einstein</p>
        </div>
        <div className="card">
          <h3>Quote 3</h3>
          <p>"Ask not what your country can do for you; ask what you can do for your country." <br /> - John Kennedy</p>
        </div>
        <div className="card">
          <h3>Quote 4</h3>
          <p>"Service to others is the rent you pay for your room here on earth." <br /> - Muhammad Ali</p>
        </div>
        <div className="card">
          <h3>Quote 5</h3>
          <p>"If you want to shine like a sun, first burn like a sun." <br /> - A. P. J. Abdul Kalam

          </p>
        </div>
      </div>
      <footer>
        <p>&copy; 2023 QotSite Company. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Body;