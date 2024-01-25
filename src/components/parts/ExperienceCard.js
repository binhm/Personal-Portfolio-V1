import React from 'react'
import "./ExperienceCard.scss"
import Container from 'react-bootstrap/Container';


const ExperienceCard = ({
    id,
    children,
    dateText,
    dateStyle,
    dateComponent,
    dateInnerStyle,
    bodyContainerStyle,
    style,
    className,
    companyIcon,
    companyLink,
    }) => {

    const cName = children === '' ? 'timeline-item--no-children': ""
    const visible = false; // TODO: clean up this unnecessary variable
    return (
        <div
            id={id}
            className={`${className} entry ${cName}`}
            style={style}>
                    
            <div className="title">
                <div className={`${visible ? 'bounce-in' : 'is-hidden'}`}>
                    {dateComponent !== null ? (
                    dateComponent
                    ) : (
                        <Container>
                           
                            <span style={dateStyle} className="timeline-item-date">
                                <p
                                    style={dateInnerStyle}
                                    className="timeline-item-dateinner"
                                    title={dateText}
                                    >
                                    {dateText} 
                                </p>
                                

                            </span>
                        
                            <a  href={companyLink} className="timeline-item--icon">
                                <img src={companyIcon} alt="company_logo"/>
                            </a>
                                
                            
                            
                    </Container>
                    )}
                </div>
            </div>
            <div className="body">
                <div
                    className={`body-container ${visible ? 'bounce-in' : 'is-hidden'}`}
                    style={bodyContainerStyle}>

                    {children}
                </div>
            </div>
                
        </div>

    )
}


ExperienceCard.defaultProps = {
    id: '',
    children: '',
    dateComponent: null,
    className: '',
    dateStyle: null,
    bodyContainerStyle: null,
    dateInnerStyle: null,
    style: null,
    dateText: '',
  };

export default ExperienceCard