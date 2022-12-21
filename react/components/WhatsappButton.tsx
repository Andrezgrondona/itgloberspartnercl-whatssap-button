import React from 'react'
import PropTypes from 'prop-types'

type Props = {
    logo: string
    phone: string
    message: string
    width: number
    height: number
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
    const formattedMessage = message.replace(/ /g, "%20")
    console.log("mensaje formateado", formattedMessage)
    return <>
        <div className='fixed bottom-2 right-2 flex flexColumn'>
            <a

                href={` https://wa.me/${phone}`}
                /* href={` https://wa.me/${phone}?text=${formattedMessage}`} */


                target="_blank"
                rel="noreferrer noopener"
            >
                <img
                    src={logo}
                    width={width}
                    height={height}
                    alt="logo de WhatsApp"
                />
            </a>

        </div>
    </>
}

WhatsappButton.PropTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
}

WhatsappButton.defaultProps = {
    logo: "whatsapp-logo.png",
    phone: "+5713017543525",
    message: "HOLA MUNDO",
    width: 80,
    height: 80
}

WhatsappButton.schema = {
    title: "boton de whatsapp",
    type: "object",
    properties: {
        logo: {
            title: "logo  de ws relacione con la marca",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            }
        },
        phone: {
            title: "telefono",
            description: "Agrega un numero de telefono",
            type: "string"
        },
        message: {
            title: "mensaje",
            description: "Agrega un mensaje para el cliente ",
            type: "string",
            widget: {
                "ui:widget": "textarea"
            }
        },
        width: {
            title: "telefono",
            description: "Agrega un numero de telefono",
            type: "number"
        },
        height: {
            title: "telefono",
            description: "Agrega un numero de telefono",
            type: "number"
        }
    }
}


export default WhatsappButton;