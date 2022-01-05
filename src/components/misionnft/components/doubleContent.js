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

const ContainerImg = ({img, hide, aux}) => {
    return hide ? (<div className='dci hide'>
            <img src={img} className={`bloque-imagen`} alt=""/>
        </div>)
        : (<div className={`${aux?`dci-${aux}`:'dci'}`}>
            <img src={img} className={`${aux?aux:'bloque-imagen'}`} alt=""/>
        </div>)
}

const ContainerMultText = ({txt}) => {
    let texto = []
    for (const key in txt) {
        texto.push(<li className="multiText" key={key} >{txt[key]}</li>)
    }
    return (
        <div className='unique-dc'>
            <ul className="list-disc" >
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
            <div key={key} className="mb-12">
                <h3 className="font-semibold" >{txt[key].fecha}</h3>
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
            <div key={key} className="mt-8 mb-12">
                <h5 className="font-semibold">{txt[key].pregunta}</h5>
                <p>{txt[key].respuesta}</p>
            </div>
        )
    }
    
    return (
        <div> {data} </div>
    )
}

const doubleContent = ({option, title, txt, txto, img, img2, reverse, hide, aux}) => {
    return option===1
    ? (
        <div className='main'>
            <h2 className="title text-3xl font-semibold" >{title}</h2>
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
            <h2 className="title text-3xl font-semibold" >{title}</h2>
            <div className='container'>
                <ContainerImg img={img} hide={hide}/>
                <ContainterText txt={txt} />
            </div>    
        </div>
    )

    : option===3 ? (
        <div className='main'>
            <h2 className="title text-3xl font-semibold" >{title}</h2>
            <div className='container'>
                <ContainterText txt={txt} />
                <ContainterText txt={txto} />
            </div>    
        </div>
    )

    : option===4 ? (
        <div className='main'>
            <h2 className="title text-3xl font-semibold" >{title}</h2>
            <div className='container cImg'>
                {aux='grupo'?<ContainerImg img={img} aux={aux}/>:<ContainerImg img={img}/>}
                {img2&&<ContainerImg img={img2}/>}
            </div>    
        </div>
    )

    : option===5 ? (
        <div className='main'>
            <h2 className="title text-3xl font-semibold" >{title}</h2>
            <div className='container'>
                <ContainerImg img={img}/>
            </div>    
        </div>
    )
    
    : option===6 ? (
        <div className='main'>
            <h2 className="title text-3xl font-semibold" >{title}</h2>
            <div className='container'>
                <ContainterText txt={txt} />
            </div>    
        </div>
    )

    : option===7 ? (
        <div className='main'>
            <h2 className="title text-3xl font-semibold" >{title}</h2>
            <div className='container'>
                <ContainerMultText txt={txt} />
            </div>    
        </div>
    )

    : option===8 ? (
        <div className='main'>
            <h2 className="title text-3xl font-semibold" >{title}</h2>
            <div className='container'>
                <ContainerRoadMap txt={txt} />
            </div>    
        </div>
    )

    : option===9 && (
        <div className='main'>
            <h2 className="title text-3xl font-semibold" >{title}</h2>
            <div className='container'>
                <ContainerAskAndAnswer txt={txt} />
            </div>    
        </div>
    )
}

export default doubleContent