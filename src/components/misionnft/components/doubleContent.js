// import {useState} from "react"
import '../main.css';
// const imgen = "../assets/NFTs/NFT_Icon.png"
// const imgen = "https://upload.wikimedia.org/wikipedia/commons/2/24/NFT_Icon.png"

const ContainterText = ({txt}) => {
    return (
        <div className="dc">
            <p>{txt?txt:'!@#'}</p>
        </div>
    )
}

const ContainerImg = ({img, hide}) => {
    return hide ? (<div className='dc hide'>
            <img src={img} className="bloque-imagen" />
        </div>)
        : (<div className='dc'>
            <img src={img} className="bloque-imagen" />
        </div>)
}

const ContainerMultText = ({txt}) => {
    let texto = []
    for (const key in txt) {
        texto.push(<li className="multiText" key={key} >{txt[key]}</li>)
    }
    return (
        <div className='unique-dc'>
            <ul>
                {texto}
            </ul>
        </div>
    )
}

const ContainerRoadMap = ({txt}) => {
    let data = []
    for (const key in txt) {
        key==='objetivo' 
        ? data.push(<p key={key} >{txt[key]}</p>)
        : data.push(
            <div key={key} >
                <h3>{txt[key].fecha}</h3>
                <p className="saltoLinea">{txt[key].descripcion}</p>
            </div>
        )
    }

    return (
        <div> {data} </div>
    )
}

const ContainerAskAndAnswer = ({txt}) => {
    let data = []
    for (const key in txt) {
        data.push(
            <div key={key} >
                <h5>{txt[key].pregunta}</h5>
                <p>{txt[key].respuesta}</p>
            </div>
        )
    }
    
    return (
        <div> {data} </div>
    )
}

const doubleContent = ({option, title, txt, txto, img, img2, reverse, hide}) => {
    return option===1
    ? (
        <div className='main'>
            <h2 className="title" >{title}</h2>
            {reverse 
                ? (<div className='container reverse'>
                    <ContainterText txt={txt} />
                    <ContainerImg img={img}/>
                </div>) 
                : (<div className='container'>
                    <ContainterText txt={txt} />
                    <ContainerImg img={img}/>
                </div>)
            }
        </div>
    )
    
    : option===2 ? (
        <div className='main'>
            <h2 className="title" >{title}</h2>
            <div className='container'>
                <ContainerImg img={img} hide={hide}/>
                <ContainterText txt={txt} />
            </div>    
        </div>
    )

    : option===3 ? (
        <div className='main'>
            <h2 className="title" >{title}</h2>
            <div className='container'>
                <ContainterText txt={txt} />
                <ContainterText txt={txto} />
            </div>    
        </div>
    )

    : option===4 ? (
        <div className='main'>
            <h2 className="title" >{title}</h2>
            <div className='container cImg'>
                <ContainerImg img={img}/>
                <ContainerImg img={img2}/>
            </div>    
        </div>
    )

    : option===5 ? (
        <div className='main'>
            <h2 className="title" >{title}</h2>
            <div className='container'>
                <ContainerImg img={img}/>
            </div>    
        </div>
    )
    
    : option===6 ? (
        <div className='main'>
            <h2 className="title" >{title}</h2>
            <div className='container'>
                <ContainterText txt={txt} />
            </div>    
        </div>
    )

    : option===7 ? (
        <div className='main'>
            <h2 className="title" >{title}</h2>
            <div className='container'>
                <ContainerMultText txt={txt} />
            </div>    
        </div>
    )

    : option===8 ? (
        <div className='main'>
            <h2 className="title" >{title}</h2>
            <div className='container'>
                <ContainerRoadMap txt={txt} />
            </div>    
        </div>
    )

    : option===9 && (
        <div className='main'>
            <h2 className="title" >{title}</h2>
            <div className='container'>
                <ContainerAskAndAnswer txt={txt} />
            </div>    
        </div>
    )
}

export default doubleContent