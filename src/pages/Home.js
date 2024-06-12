import React from 'react';
import '../App.css'

const Home = () => {
    return (
        <section className="home">
          <div className="container">
          <h1>مرحبا بكم في شركة تكامل الرؤي</h1>
            <p>نقدم أفضل الألعاب لأطفالكم لتجعل وقتهم ممتعًا وتعليميًا</p>
            <a href="/products" className="btn">تسوق الآن</a>
          </div>
        </section>
      );
    }
    
    export default Home;