import React, {Component} from 'react';
import CardSkill from '../components/cardskill';

class Skills extends Component {

    render() {
        return (

            <div className="valign-wrapper center-align skill">
                <div className="container ">

                    <div className="card blue-grey darken-1 hoverable">
                        <div className="card-content white-text">
                            <span className="card-title">Skills</span>
                            <p>Alguns de meus conhecimentos técnicos.</p>
                        </div>
                    </div>

                    <div className="row">

                        <CardSkill nome="HTML5" icon="html5" nivel={3}/>

                        <CardSkill nome="CSS3" icon="css3" nivel={3}/>

                        <CardSkill nome="Bootstrap" icon="bootstrap" nivel={3}/>

                        <CardSkill nome="JavaScript" icon="javascript" nivel={2}/>

                        <CardSkill nome="React" icon="react" nivel={2}/>

                        <CardSkill nome="Angular" icon="angularjs" nivel={2}/>

                        <CardSkill nome="NodeJs" icon="nodejs" nivel={1}/>

                        <CardSkill nome="PHP" icon="php" nivel={2}/>

                        <CardSkill nome="Laravel" icon="laravel" nivel={1}/>

                        <CardSkill nome="WordPress" icon="wordpress" nivel={1}/>

                        <CardSkill nome="Java" icon="java" nivel={2}/>

                        <CardSkill nome="Android" icon="android" nivel={2}/>

                        <CardSkill nome="MySql" icon="mysql" nivel={2}/>

                        <CardSkill nome="MongoDB" icon="mongodb" nivel={1}/>

                        <CardSkill nome="Ubuntu" icon="ubuntu" nivel={2}/>

                        <CardSkill nome="GIT" icon="git" nivel={2}/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Skills;