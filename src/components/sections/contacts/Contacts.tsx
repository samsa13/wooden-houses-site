import { ChangeEvent, FC, FormEvent, useState } from 'react';
import './contacts.scss'
import React from 'react';
import { send } from 'emailjs-com';


const Contacts: FC = () => {

  const [toSend, setToSend] = useState({
    from_name: '',
    phone:'',
    email: '',
    message:'',
  });

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  setToSend({ ...toSend, [e.target.name]: e.target.value });
};

const contacts = document.getElementById('contacts');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    contacts?.classList.add('_sending');
    send(
      'service_gk6iyuj',
      'template_0dsus3k',
       toSend,
      'KomfDtYUP2-EEeuiW'
    )
      .then((response) => {
        alert('Ваше сообщение успешно доставлено!');
        console.log('SUCCESS!', response.status, response.text);
        contacts?.classList.remove('_sending');
      })
      .catch((err) => {
        alert('Произошла ошибка!');
        console.log('FAILED...', err);
        contacts?.classList.remove('_sending');
      });
  };

  return (
    <section id="contacts" className='contacts'>
      <h1>Контакты</h1>
      <div className='contacts-text'>
        <div>
          <p className='bigger_size'>Как с нами связаться:</p>
          <p>
            <a className='phone '
              href="tel:+79159678882"
              target="_blank"
              rel="noreferrer"
            >+7 (915) 967-88-82,</a></p>
          <p className=''>
            <a className='phone2'
              href="tel:+79092771964"
              target="_blank"
              rel="noreferrer"
            >+7 (909) 277-19-64</a></p>
          <p><a className='mail'
            href="mailto:doma_derevyannye@mail.ru"
            target="_blank"
            rel="noreferrer"
          >doma_derevyannye@mail.ru</a>
          </p>
          <p>
            <a className='vk'
              href='https://vk.com/tel_9108238566/'
              target="_blank"
              rel="noreferrer noopener"
            >Наша страница вконтакте</a>
          </p>
        </div>
        <div>
          <p className='bigger_size'>Адрес офиса:</p>
          <p className='address'
          >Ул. Димитрова 1 - 31,</p>
          <p>г. Рыбинск, Ярославская обл.</p>
        </div>
      </div>

      <div id="survey-form" className='survey-form'>
        <div className='header'>
          <h6>Появились вопросы?</h6>
          <h6>Оставьте свои контакты</h6>
          <h5>Мы Вам перезвоним</h5>
        </div>
        <div className='triangle'></div>


        <form onSubmit={onSubmit} 
              className='form'
              id='form'>  
          <label htmlFor='name'
                 className='label'
          >Как Вас зовут?</label>
          <input type="text" 
                 id="name"
                 name='from_name'
                 className='input reg' 
                 value={toSend.from_name} 
                 onChange={handleChange} 
                 placeholder='Ваше имя...' 
                 required
          />
          <label htmlFor='phone'
                 className='label'
          >Номер телефона</label>
          <input type="text" 
                 id="phone"
                 name='phone'
                 className='input reg' 
                 value={toSend.phone} 
                 onChange={handleChange} 
                 placeholder='+7 (XXX) XXX-XX-XX'
                 required
          />
          <label htmlFor='email'
                 className='label'
          >Адрес почты</label>
          <input type="text" 
                 id="email"
                 name='email'
                 className='input reg' 
                 value={toSend.email} 
                 onChange={handleChange} 
                 placeholder='Ivanov@mail.ru'
                 required
          />
          <label htmlFor='message'
                 className='label'
          >Ваше сообщение</label>
          <input type="text" 
                 id="message"
                 name='message'
                 className='input reg' 
                 value={toSend.message} 
                 onChange={handleChange} 
                 placeholder='Хотелось бы узнать сколько стоит...'
                 required
          />
          <button type='submit'
                  className='submit_button'
          >Отправить</button>
        </form>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.4794452034043!2d38.825024713961206!3d58.05339096918618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b2111256cdcaff%3A0x101eedaec829d994!2z0YPQuy4g0JTQuNC80LjRgtGA0L7QstCwLCAxLCDQoNGL0LHQuNC90YHQuiwg0K_RgNC-0YHQu9Cw0LLRgdC60LDRjyDQvtCx0LsuLCAxNTI5MDM!5e0!3m2!1sru!2sru!4v1659709576109!5m2!1sru!2sru" title='google_map' className='google-map' loading="lazy"></iframe>

    </section>
  )
}

export default Contacts
