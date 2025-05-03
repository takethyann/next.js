import Image from "next/image";

export default function Home() {
  return (
    <body>
    <header>
        <div className="logo"><u>BOOST</u></div>
            <nav>
                <a href="#">HOME</a>
                <a href="#">SERVICE</a>
                <a href="#">ABOUT</a>
                <a href="#">NEWS</a>
                <a href="#">CONTACT</a>
            </nav>
    </header>
    <main>
      <section className="contact-hero">
        <div className="contact-text">
          <h1 className="CONTACT">CONTACT</h1>
          <p className="sub-title">お問い合わせ</p>
        </div>
      </section>

        <section className="main-contact">
          <div className="title">
            <p className="home-contact">HOME-CONTACT</p>
          </div>
            <div className="inner">
              <div className="text-inner">
                <p>お問い合わせ、ご相談は下記のフォームよりお 問い合わせください。</p>
                <p> 後ほど担当者よりご連絡差し上げます。</p>
                <p>なお、入力いただきましたお客様の個人情報・相談内容は弊社にて厳重に取り扱い致します。</p>
              </div>
                <div className="input-section-inner">
                  <h2 className="input-text">問い合わせ種別</h2>
                    <fieldset className="radio-group">
                      <label className="radio-item">
                        <input
                        className="radio-content"
                        type="radio"
                        name="topic"
                        value="service">
                        <span> サービスについてのお問い合わせ</span>
                        </input>
                      </label>
                      <label className="radio-item">
                        <input className="radio-content"
                                type="radio"
                                name="topic"
                                value="product">
                        <span> 商品について</span>
                        </input>
                      </label>
                      <label className="radio-item">
                        <input
                        className="radio-content"
                        type="radio"
                        name="topic"
                        value="suggestion">
                        <span> 弊社への広告サービスのご提案</span>
                        </input>
                      </label>
                      <label className="radio-item">
                        <input
                          className="radio-content"
                          type="radio"
                          name="topic"
                          value="other">
                          <span> その他お問い合わせ</span>
                          </input>
                        </label>
                    </fieldset>

                        <div className="form-container">
                          <div className="form-row">
                              <label htmlFor="company">貴社名
                                <span className="required">（必須）</span>
                              </label>
                                  <input type="text" 
                                      id="company" 
                                      name="company" 
                                      placeholder="株式会社BOOST"
                                    required>
                                  </input>
                          </div>

                          <div className="form-row">
                                <label htmlFor="person">ご担当者名
                                  <span className="required">（必須）</span>
                                        </label>
                                        <input type="text" 
                                                id="person" 
                                                name="person" 
                                                placeholder="株式会社BOOST"
                                                required>
                                        </input>
                                    </div>

                                    <div className="form-row">
                                        <label htmlFor="department">部署名
                                            <span className="required">（必須）</span>
                                        </label>
                                        <input type="text" 
                                                id="department" 
                                                name="department" 
                                                placeholder="株式会社BOOST"
                                                required>
                                        </input>
                                    </div>

                                    <div className="form-row">
                                        <label htmlFor="position">役職</label>
                                        <input type="text" 
                                                id="position" 
                                                name="position" 
                                                placeholder="株式会社BOOST"
                                                required>
                                        </input>
                                    </div>

                                    <div className="form-row">
                                        <label htmlFor="url">貴社URL</label>
                                        <input type="text" 
                                                id="url" 
                                                name="url" 
                                                placeholder="株式会社BOOST"
                                                required>
                                        </input>
                                    </div>

                                    <div className="form-row">
                                        <label htmlFor="email">メールアドレス
                                            <span className="required">（必須）</span>
                                        </label>
                                        <input type="text" 
                                                id="email" 
                                                name="email" 
                                                placeholder="株式会社BOOST"
                                                required>
                                          </input>
                                    </div>

                                    <div className="form-row">
                                        <label htmlFor="phone">お電話番号</label>
                                        <input type="tel" 
                                                id="phone" 
                                                name="phone" 
                                                placeholder="株式会社BOOST"
                                                required>
                                        </input>
                                    </div>
                                </div>

                                
                        </div>
                        <div className="message-text">
                            <label htmlFor="message">お問い合わせ内容</label>
                            <textarea id="message" 
                                    name="message" 
                                    rows={5}></textarea>
                            <label htmlFor="box">個人情報の取り扱いについて</label>
                            <textarea id="message" 
                                    name="message" 
                                    rows={5}></textarea>
                        </div>
                </div>
                <form className="form-submit">
                    <div className="agree-section">
                        <label htmlFor="checkbox-label">
                            <input type="checkbox" required></input>
                            <span>同意する</span>
                        </label>
                    </div>

                    <div className="submit-section">
                        <button type="submit" className="submit-button">送信する</button>
                    </div>
                </form>
        </section>
    </main>
    <footer className="footer">
        <div className="footer-top">
            <div className="footer-left">
                <h2>GET IN TOUCH <br>WITH US</br></h2>
                <a href="#contact" className="contact-button">CONTACT</a>
            </div>
            <div className="footer-right">
                <ul className="footer-nav">
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#service">SERVICE</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#news">NEWS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-logo">
                <em><u>BOOST</u></em>
            </div>
            <div className="footer-info">
                <span>PRIVACY POLICY</span>
                <span>©2022 BOOST INC.</span>
            </div>
        </div>
        <a href="#" className="scroll-top">↑</a>
    </footer>
</body>
  );
}
