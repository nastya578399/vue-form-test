<template>
  <div class="container">
    <h2 class="black">Форма подачи заявки в отдел сервиса и качества</h2>
    <form class="card" @submit.prevent="submitHandler">
      <div class="form-control">
        <label for="city">Ваш филиал <small>*</small></label>
        <select id="city" v-model="form.city" :disabled="isValid" >
          <option  v-for="inf in info" :key="inf" :value="inf.title">{{ inf.title }}</option>
        </select>
      </div>
      <div class="form-checkbox">
        <div class="checkbox">
          <label><input type="checkbox" v-model="form.online" /> Онлайн </label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Тема обращения <small>*</small></span>
        <div class="checkbox">
          <label><input type="radio" v-model="form.cause" name="handling" value="Недоволен качеством услуг" :disabled="isCause"/> Недоволен качеством услуг</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" v-model="form.cause" name="handling" value="Расторжение договора" :disabled="isCause" /> Расторжение договора</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" v-model="form.cause" name="handling" value="Не приходит письмо активации на почту" :disabled="isCause" /> Не приходит письмо активации на почту</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" v-model="form.cause" name="handling" value="Не работает личный кабинет" :disabled="isCause" /> Не работает личный кабинет</label>
        </div>

        <div class="checkbox">
          <input type="text" class="theme" v-model.trim="form.theme" placeholder="Другое" />
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Описание проблемы <small v-if="form.errors.desk">{{ form.errors.desk }}</small></span>
        <div class="checkbox">
          <textarea type="text" class="desk" v-model.trim="form.desk"></textarea>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Загрузка документов</span>
        <h5 class="desk-checkbox">Приложите полноэкранный скриншот. Это поможет быстрее решить проблему</h5>
        <div class="checkbox">
          <input type="file" name="f">
        </div>
      </div>

      <button type="submit" class="btn primary" :disabled="!isValidForm">Отправить</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      info: null,
      form: {
        city: '',
        online: false,
        cause: null,
        theme: '',
        desk: '',
        errors: {
          desk: null
        },
        open: false
      }
    }
  },
  mounted () {
    axios
      .get('https://6196084574c1bd00176c6ff1.mockapi.io/api/v1/cities')
      .then(response => (this.info = response.data))
  },
  computed: {
    isValid () {
      return this.form.online
    },
    isCause () {
      return this.form.theme.length > 0
    },
    isValidForm () {
      return (this.form.city !== '' || this.form.online !== false) &&
        (this.form.cause !== '' || this.form.theme !== '') && this.form.desk !== ''
    }
  },
  methods: {
    formIsValid () {
      let isValid = true

      if (this.form.desk.length === 0) {
        isValid = false
      }

      return isValid
    },
    formCityValid () {
      let isValid = true

      if (this.form.online) {
        this.form.city = ''
        isValid = true
      } else if (this.form.city.length === 0) {
        isValid = false
      }

      return isValid
    },
    formCauseValid () {
      let isValid = true

      if (this.form.theme.length > 0) {
        this.form.cause = ''
        isValid = true
      } else if (this.form.cause === 0) {
        isValid = false
      }

      return isValid
    },
    submitHandler () {
      if (this.formIsValid() && this.formCityValid() && this.formCauseValid()) {
        console.group('Form Data')
        console.log('City', this.form.city)
        console.log('online', this.form.online)
        console.log('Обращение', this.form.cause)
        console.log('Обращение2', this.form.theme)
        console.log('Описание', this.form.desk)
        console.groupEnd()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

input {
  color: #0b0b0c;
}

textarea:focus, input:focus{
outline: none;
font-size: 15px;
}

.black {
  color: black;
}

.theme {
  margin: 0;
  border: 1px solid #ccc;
  width: 40%;
  color: #2c3e50;
  padding: 0.3rem 0.3rem;
}

.desk {
  border: 1px solid #ccc;
  width: 100%;
  height: 110px;
}

.desk-checkbox {
  width: 30%;
}

.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

small {
  color: #ca2121;
}

</style>
