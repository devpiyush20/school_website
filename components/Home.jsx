"use client";
import React from "react";
import Image from "next/image";
import ImageCarousel from "./ImageCarousel";
import PrincipleMessage from "./PrincipleMessage";
import ContactComponent from "./Contact";
import MentorsComponent from "./MentorsComponent";
import CurriculumComponent from "./CurriculumComponent";
import AboutSchool from "./AboutSchool";







const Home = () => {
  const images = [
    "/assets/img1.jpg",
    "/assets/img2.jpg",
    "/assets/img3.jpeg",
    "/assets/img4.jpg",
  ];
  const principleName = "John Doe";
  const message =
    "अंध विश्वास से मुक्त संस्कार दृयुक्त शिक्षा जो व्यक्ति को जीविकोपार्जन करने में सक्षम बनाने के साथ दृसाथ देशभक्ति व समाज सेवा के संस्कार भी दे सके और अपने मातृभूमि के प्रति अगाध श्रद्धा भाव पैदा कर सके, ऐसे पावन उद्देश्य को लेकर सन 1962 मे स्वर्गीय श्री भूदेव सिंह (स्वतंत्रता सेनानी) जी द्वारा स्थापित बाबू बनारसी दास जनता इंटर कॉलेज उटरावली मानकपुर इस ग्रामीण क्षेत्र का ही नहीं बल्कि नगर का भी एक अनुशासित इंटर कॉलेज बन गया है। इस क्षेत्र में बाबू बनारसी दास जनता इंटर कॉलेज का एक विशिष्ट पहचान है। विद्यालय ने इतने वर्षों की लम्बी प्रगति गाथा में विकास की जो अप्रतिम कहानी लिखी गई उसके लिए मैं सर्व प्रथम स्वर्गीय श्री भूदेव सिंह जी का नमन करता हूँ, जिन्होंने बिना किसी स्वार्थ से समाज को ऊँचाईयां प्रदान करने के लिए अपना तन-मन एवं धन समर्पित किया एवं बाबू बनारसी दास जनता इंटर कॉलेज जैसी आदर्श शिक्षण संस्था की स्थापना की और अपने पूर्ववर्ती सभी प्रधानाचार्यों तथा शिक्षक वर्ग को बधाई देता हूँ जो इस 61 वर्ष की शिक्षण यात्रा में सहभागी बने हैं। मेरा पूरा प्रयास यही है कि इस विद्यालय में शिक्षण कार्य निरंतर व सुचारू रूप से चलते रहे, तथा विद्यालय के सभी विद्यार्थी संयमित, अनुशासित एवं शिक्षित हो कर समाज में सफलता के उच्च सोपान चढते हुए विद्या के इस मंदिर एव शिक्षकगणों के प्रति श्रध्दावान रहे तथा बाबू बनारसी दास जनता इंटर कॉलेज निरंतर प्रगति और विकास के पथ पर अग्रसर रहे। मुझे गर्व है कि मैं ऐसी गौरवशाली संस्था के प्रधानाचार्य पद पर रहकर अपनी सेवा प्रदान कर रहा हूँ मेरा दृढ संकल्प है कि मैं इस विरासत के संवर्धन हेतु सेवा करता रहूँगा। अन्त में मैं सभी अभिभावक से अनुरोध करता हूँ कि वे भी विद्यालय को अपना विद्यालय समझकर इसकी व्यवस्थाओं को बनाये रखने में सहयोग प्रदान करें, तथा समय समय पर अपने पाल्यों की प्रगति के विषय में सम्बंधित अध्यापक अथवा मुझसे सम्पर्क बनाये रखे। ";
  const imageUrl = "/assets/p_img.png";

  return (
    <div className="container flex flex-col mx-auto my-8">
    <ImageCarousel images={images} className="w-1500 h-1200 mb-8" />
    <PrincipleMessage
    imageUrl={imageUrl}
      principleName={principleName}
      message={message}
    
      className="md:mt-5 mt-5 shadow-2xl"
    />


    <AboutSchool/>
    <MentorsComponent />
    <ContactComponent/>
    
    <CurriculumComponent/>
  </div>
  
  );
};

export default Home;
