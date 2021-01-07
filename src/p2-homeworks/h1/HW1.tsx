import React from 'react';
import Message from './Message';

const messageData = {
  avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
  name: 'Евгений',
  message: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.',
  time: '22:00'
};

function HW1() {
  return (
      <div>
        <hr/>
        homeworks 1
        should work (должно работать)
        <Message
            avatar={messageData.avatar}
            name={messageData.name}
            message={messageData.message}
            time={messageData.time}
        />
        <hr/>
        {/*для личного творчества, могу проверить*/}
        {/*<AlternativeMessage/>*/}
        <hr/>
      </div>
  );
}

export default HW1;
