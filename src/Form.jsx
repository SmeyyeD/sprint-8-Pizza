import React from 'react'
import './index.css'


const boyutlar = ['Küçük', 'Orta', 'Büyük'];
const hamurlar = ['İnce', 'Orta', 'Kalın'];

function Form() {

    return (

        <div className='display-flex justify-content align-items text-content gap-10rem'>

            <div className="font-barlow color-black max-width">

                <h2>Position Absolute Acı Pizza</h2>

                <h1>85.50₺</h1>

                <p className='text-align-start'>
                    Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
                </p>


                <div className='display-flex justify-content-start '>{/* Boyut - Hamur */}

                    <div>{/* Boyut Seç */}

                        <h2>Boyut Seç<span className='color-star'>*</span></h2>

                        {boyutlar.map((boyut, ind) => {

                            return (

                                <label key={ind} className='display-flex gap-1rem'>

                                    <input type="radio" name="boyut" value="boyut" />
                                    {boyut}

                                </label>

                            )
                        })}

                    </div>

                    <div> {/* Hamur Seç */}

                        <h2>Hamur Seç<span className='color-star'>*</span></h2>

                        <select name="hamur" id="">

                            <option value="" disabled selected>Hamur Kalınlığı</option>

                            {hamurlar.map((hamur, ind) => {
                                return (
                                    <option value={hamur}>{hamur}</option>
                                )
                            })
                            }

                        </select>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Form