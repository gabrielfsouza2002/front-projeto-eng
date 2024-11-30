import "../../Style/Style.css"
import 'popper.js';
import imgslider from './imgs/slider-img.png';
import bgimg from './imgs/hero-bg.png';

function Init() {
  return (
    <div className="sub_page">
      <div className="hero_area">

        <div class="hero_bg_box">
          <div class="bg_img_box">
            <img src={bgimg}/>
          </div>
        </div>

        <><section class="slider_section ">
          <div id="customCarousel1" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container ">
                  <div class="row">
                    <div class="col-md-6 ">
                      <div class="detail-box">
                        <h1>
                          Consulte informações <br />
                          de diversas escolas.
                        </h1>
                        <p>
                          Acesse dados sobre estrutura, qualidade do ensino e avaliações de diversas escolas públicas.
                        </p>
                        <div class="btn-box">
                          <a href="" class="btn1">
                            Cadastre-se
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="img-box">
                        <img src={imgslider} alt="Ícone de Busca "/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item ">
                <div class="container ">
                  <div class="row">
                    <div class="col-md-6 ">
                      <div class="detail-box">
                        <h1>
                          Avalie sua <br />
                          Escola.
                        </h1>
                        <p>
                          Compartilhe sua experiência e ajude outros a entender melhor a qualidade da educação oferecida.
                        </p>
                        <div class="btn-box">
                          <a href="" class="btn1">
                            Registre-se
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="img-box">
                        <img src={imgslider} alt="slider"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container ">
                  <div class="row">
                    <div class="col-md-6 ">
                      <div class="detail-box">
                        <h1>
                          Veja notas do Enem <br />
                          por escola.
                        </h1>
                        <p>
                          Consulte o desempenho das escolas públicas nas últimas edições do Enem, comparando resultados.
                        </p>
                        <div class="btn-box">
                          <a href="" class="btn1">
                            Registre-se
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="img-box">
                        <img src={imgslider} alt="slider"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol class="carousel-indicators">
              <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
              <li data-target="#customCarousel1" data-slide-to="1"></li>
              <li data-target="#customCarousel1" data-slide-to="2"></li>
            </ol>
          </div>

        </section><section class="info_section layout_padding2">
            <div class="container">
              <div class="row">

                <div class="col-md-6 col-lg-3 info_col">
                  <div class="info_detail">
                    <h4>
                      Info
                    </h4>
                    <p>
                      Desenvolvidos por alunos da Universidade de São Paulo, este site oferece uma forma de encontrar informações detalhadas sobre escolas públicas, incluindo infraestrutura, localização e desempenho.
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-lg-2 mx-auto info_col">
                  <div class="info_link_box">
                    <h4>
                      Links
                    </h4>
                    <div class="info_links">
                      <a class="active" href="index.html">
                        Inicio
                      </a>
                      <a class="" href="about.html">
                        Sobre
                      </a>
                      <a class="" href="service.html">
                        Serviços
                      </a>
                      <a class="" href="why.html">
                        Por que nós
                      </a>
                      <a class="" href="team.html">
                        Equipe
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3 info_col ">
                  <h4>
                    Cadastre-se
                  </h4>
                  <form action="#">
                    <input type="text" placeholder="Enter email" />
                    <button type="submit">
                      Cadastre-se
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section></>
      </div>
    </div>
  );
}

export default Init;