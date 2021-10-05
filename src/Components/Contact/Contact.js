import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

import './Contact.css'
const Contact = () => {
    return (

        <div>
            <Banner />            <h1 className="mt-5">You Can Contact With Us</h1>

            <div class="background d-flex ">
                <div className="form-contact w-50">
                    <h1 className="mb-5 text-white mt-5">ENJOY YOUR LEARNING ENGLISH !</h1>
                    <p><span>1.</span>Read as much as you can in English. No matter what it is, from cartoons to British literature anything counts.

                        Naturally if you wish to develop I would recommend you to choose something that provides you a challenge. So renew your library pass, subscribe to your favorite English magazine or go online!</p>
                    <p><span>2.</span>Where and how, you might ask. Well there are many ways to do this. You can start your own blog (learn more how to set up your blog) in English about your hobby, travel experiences or anything that interests you.

                        If you don’t feel like writing, read others’ blogs or articles and feel free to comment if you have a question! You can also try to find an online community that has the same interest as you where you can share your own ideas, thoughts and beliefs.</p>
                    <p><span>3.</span>This usually seems to be the most difficult part, but you have to conquer yourself! If you find yourself in a situation where you have the chance to use English grab it!

                        You must overcome your fears that you might speak incorrectly, and you can also ask your partner to correct you. So whenever you travel or meet foreigners don’t forget to speak as much as you can!

                        Or you can subscribe to interactive web pages like babbel.com that not only provides many interesting ways of online learning but the chance to meet and speak other language learners too!</p>
                </div>
                <div class="container bg-dark">

                    <div class="screen-body">
                        <div class="screen-body-item left">
                            <div class="app-title">
                                <span className="text-danger">CONTACT US</span>

                            </div>
                            <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div>
                        </div>
                        <div class="screen-body-item">
                            <div class="app-form">
                                <div class="app-form-group">
                                    <input class="app-form-control" placeholder="NAME" value="Learning English" />
                                </div>
                                <div class="app-form-group">
                                    <input class="app-form-control" placeholder="EMAIL" />
                                </div>
                                <div class="app-form-group">
                                    <input class="app-form-control" placeholder="CONTACT NO" />
                                </div>
                                <div class="app-form-group message">
                                    <input class="app-form-control" placeholder="MESSAGE" />
                                </div>
                                <div class="app-form-group buttons">
                                    <button class="app-form-button">CANCEL</button>
                                    <button class="app-form-button">SEND</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>




    );
};

export default Contact;