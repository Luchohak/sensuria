import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './App.css'

class App extends React.Component {

    componentDidMount() {
        console.log("[App.js] DidUpdate");
    }

    render() {
        return (
            <BrowserRouter>
                <div className="bg2 global-font">
                    <Layout />
                    <div>
                        {/* Begin Mailchimp Signup Form */}
                        <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" />
                        <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n" }} />
                        <div id="mc_embed_signup">
                            <form action="https://sensuriamusic.us7.list-manage.com/subscribe/post?u=9d4421d7f5fccd13fdb884859&id=bc40ad3cba" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                                <div id="mc_embed_signup_scroll">
                                    <h2>Subscribe</h2>
                                    <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                                    <div className="mc-field-group">
                                        <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span>
                                        </label>
                                        <input type="email" defaultValue name="EMAIL" className="required email" id="mce-EMAIL" />
                                    </div>
                                    <div className="mc-field-group">
                                        <label htmlFor="mce-FNAME">First Name </label>
                                        <input type="text" defaultValue name="FNAME" className id="mce-FNAME" />
                                    </div>
                                    <div className="mc-field-group">
                                        <label htmlFor="mce-LNAME">Last Name </label>
                                        <input type="text" defaultValue name="LNAME" className id="mce-LNAME" />
                                    </div>
                                    <div className="mc-field-group size1of2">
                                        <label htmlFor="mce-BIRTHDAY-month">Birthday </label>
                                        <div className="datefield">
                                            <span className="subfield monthfield"><input className="birthday " type="text" pattern="[0-9]*" defaultValue placeholder="MM" size={2} maxLength={2} name="BIRTHDAY[month]" id="mce-BIRTHDAY-month" /></span> /
                  <span className="subfield dayfield"><input className="birthday " type="text" pattern="[0-9]*" defaultValue placeholder="DD" size={2} maxLength={2} name="BIRTHDAY[day]" id="mce-BIRTHDAY-day" /></span>
                                            <span className="small-meta nowrap">( mm / dd )</span>
                                        </div>
                                    </div>	<div id="mce-responses" className="clear">
                                        <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                                        <div className="response" id="mce-success-response" style={{ display: 'none' }} />
                                    </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                                    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_9d4421d7f5fccd13fdb884859_bc40ad3cba" tabIndex={-1} defaultValue /></div>
                                    <div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
                                </div>
                            </form>
                        </div>
                        {/*End mc_embed_signup*/}
                    </div>
                    <footer className="footer">
                        coded with&nbsp;<i class="far fa-heart"></i>&nbsp;by Luchohak&nbsp;<i class="far fa-hand-spock"></i>.
                </footer>
                </div>
            </BrowserRouter>
        );
    }
} export default App