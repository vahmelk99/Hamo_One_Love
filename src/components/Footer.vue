<template>
  <div class="mb-4">
    <b-row>
      <b-col md="6">
        <b-row>
          <b-col xs="6">
            <img src="img/Group 64.png" alt="">
            <ul>
              <li><a href="#">&copy; 2012-2019</a></li>
              <li><a href="#">OOO <span class="symb">≪</span>Портал<span class="symb">≫</span></a></li>
              <li><a href="#">OГРН 1147746136713</a></li>
              <li><a href="#">ИНН 7731465565</a></li>
              <li><a href="#">КПП 773101001&copy; 2012-2019</a></li>
            </ul>  
          </b-col>
          <b-col xs="6">
            <ul>
              <li><a href="#">O компании</a></li>
              <li><a href="#">КонтактыOГРН 1147746136713</a></li>
              <li><a href="#">Правила</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Oтзывы</a></li>
              <li><a href="#">Политика конфиденциальности</a></li>
              <li><a href="#">Блог Достависты</a></li>
            </ul>
          </b-col>
        </b-row>
      </b-col>
      
      <b-col>
        <b-row>
          <b-col xs="6">
            <ul>
              <li><a href="#">Грузоперевозки</a></li>
              <li><a href="#">Тарифы</a></li>
              <li><a href="#">Интернет-магазины</a></li>
              <li><a href="#">Юр.лицам</a></li>
              <li><a href="#">Интеграция по API</a></li>
              <li><a href="#">Для курьеров</a></li>
            </ul> 
          </b-col>
          <b-col xs="6">
            <ul>
              <li><a href="#">Договор</a></li>
              <li><a href="#">Вакансии</a></li>
              <li><a href="#">Posilochki Group</a></li>
              <li><a href="#">Работа курьером</a></li>
              <li><a href="#">Межгород</a></li>
              <li><a href="#">Доставка из Москвы</a></li>
            </ul>
          </b-col>
        </b-row>
      </b-col>

      <b-col md="2" class="pt-4 text-right appsPar">
        <a href="#"><img src="img/appstore-badge.png" class="appsIcon" alt=""></a>
        <a href="#"><img src="img/google-badge.png" class="appsIcon" alt=""></a>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="3"></b-col>
      <b-col md="5">
        <h2 class="text-uppercase font-weight-bold">График работы</h2>
        <p>Контакт-центр — с 06:00 до 24:00 без выходных. Оформление заявок на сайте и х исполнение происходит круглосуточно.</p>
      </b-col>

      <b-col>
        <h2 class="text-uppercase font-weight-bold">Контакты</h2>
        <p>Юридический адрес: 143026, Россия, г. Москва,<br>Территория инновационного центра <span class="symb">≪</span>Сколково<span class="symb">≫</span>.<br>Фактический адрес: 115114, Россия, г. Москва,<br>Дербеневская улица, 7c10<br>Email: op@dostavista.ru</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    changeToHome(){
      location.href = "/";
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  font-weight: 500;
  margin-top: 20px;
  list-style-type: none;
  /* margin: 0; */
  padding: 0;
}
ul a, p{
  color: #6f64a4;
}
.symb{
  font-size: 9px !important;
}
img{
  width: 100%;
  max-width: 150px;
  min-width: 85px;
}
.container  *{
  font-size: 11.5px;
  line-height: 170%;
}
.container {
  padding: 0 5.2vw;
}
h2{
  color: #4f418f;
}
p{
  margin: 0;
  padding: 0;
}
.appsIcon{
  height: 30px;
  margin-bottom: 10px;
  width: auto;
}
a{
  cursor: pointer;
}
@media screen and (max-width: 767.5px){
  .appsPar{
    padding-top: 0 !important;
    display: flex;
    justify-content: flex-start;
  }
  h2{
    margin-top: 10px;
  }
}
</style>
