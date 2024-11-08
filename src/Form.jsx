import React, { useState } from "react";
import "./App.css";

const boyutlar = ["Küçük", "Orta", "Büyük"]; // burası doğru yer
const hamurlar = ["İnce", "Orta", "Kalın"];
const malzemeler = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalepeno",
    "Sarımsak",
    "Biber",
    "Sucuk",
    "Ananas",
    "Kabak",
];

function Form() {
    const [form, setForm] = useState({ boyut: "", hamur: "", malzemeler: [] });

    // const handleChange = (e) => {
    //   const { name, value, checked } = e.target;
    //   const newForm = { ...form, [name]: value };
    //   setForm(newForm);
    // };

    const handleChange = (e) => {
        const { name, value, checked } = e.target;

        if (name === "malzemeler") {
            let secilenMalzemeler = [];

            if (checked) {
                secilenMalzemeler = [...form.malzemeler, value];
            } else {
                secilenMalzemeler = form.malzemeler.filter(
                    (malzeme) => malzeme !== value
                );
            }

            setForm({ ...form, malzemeler: secilenMalzemeler });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    return (
        <div className='display-flex justify-content align-items text-content gap-5rem flex-direction-column padding'>
            <div className="display-flex flex-direction-column gap-1rem font-barlow color-black max-width-35rem margin-0-auto ">
                {" "}
                {/* Fiyat-Ürün Bilgisi */}
                <h2>Position Absolute Acı Pizza</h2>
                <div className="display-flex justify-content-sb align-items-end">
                    <h1>85.50₺</h1>
                    {/* ne yaptıysam h1 div in alt cızgısını hızzalanmadı. */}

                    <div className="display-flex justify-content-end width-yüz100 gap-3rem ">
                        <p>{`${"4.9"}`}</p>
                        <p>{`${"200"}`}</p>
                    </div>
                </div>
                <p className="text-align-justify">
                    Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
                    pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli3rem
                    diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
                    ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
                    düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
                    lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
                </p>
            </div>

            <div className="display-flex gap-5rem min-width-35rem margin-0-auto gap-10rem ">

                <div>
                    <h2 className="height-">
                        Boyut Seç<span className="color-star ">*</span>
                    </h2>

                    {boyutlar.map((boyut, ind) => {
                        return (
                            <label key={ind} className="display-flex gap-1rem height">
                                <input
                                    type="radio"
                                    name="boyut"
                                    value={boyut}
                                    onChange={handleChange}
                                />
                                {boyut}
                            </label>
                        );
                    })}
                </div>

                <div>
                    {" "}

                    <h2 className="height-2rem">
                        Hamur Seç<span className="color-star ">*</span>
                    </h2>
                    <select name="hamur" onChange={handleChange}>
                        <option value="" disabled selected>
                            Hamur Kalınlığı
                        </option>

                        {hamurlar.map((hamur, ind) => {
                            return (
                                <option key={ind} value={hamur}>
                                    {hamur}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>

            <div className="display-flex flex-direction-column max-width-35rem gap-3rem margin-0-auto">
                {/* Ek Malzemeler */}
                <div className="display-flex flex-direction-column gap-1rem">
                    <h2>Ek Malzemeler</h2>
                    <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
                </div>
                <div className="display-flex justify-content-sb gap-1-5rem wrap">
                    {malzemeler.map((malzeme, ind) => {
                        return (
                            <label
                                key={ind}
                                className="display-flex gap-0-5rem flex-basis-9rem"
                            >
                                <input
                                    type="checkbox"
                                    name="malzemeler"
                                    value={malzeme}
                                    checked={form.checked}
                                    onChange={handleChange}
                                />
                                {malzeme}
                            </label>
                        );
                    })}

                    <label className="flex-basis-9rem"></label>
                    <div className="display-flex flex-direction-column min-width-35rem min-height-15rem gap-2rem padding">
                        <label className="font-size font-weight-bold " htmlFor="orderNote" >Sipariş Notu</label>
                        <input className="min-height-5rem border-radius" type="text" id="orderNote" name="orderNote" value="" placeholder="Siparişine eklemek istediğin bir not var mı? " />
                    </div>
                    <div className="display-flex min-width-35rem space-between height-12rem gap-1rem ">
                        <div className="display-flex min-height-10rem ">
                            <button className="width-3rem height-3rem background-color-yellow outline-none border-radius">-</button>
                            <label className="width-3rem height-3rem text-align-center justify-content-center align-items-center font-size border">0</label>
                            <button className="width-3rem height-3rem background-color-yellow outline-none border-radius ">+</button>
                        </div>
                        <div className="width-yüz100 display-flex flex-direction-column space-between border border-radius-7rem">
                            <label className="font-weight-bold letter-spacing margin-left height-4rem font-barlow" >Sipariş Toplamı</label>
                            <div className="display-flex space-around font-barlow font-weight-bold">
                                <label >Seçimler</label>
                                <label >20.00₺</label>
                            </div>
                            <div className="display-flex space-around font-barlow color-red font-weight-bold">
                                <label>Toplam</label>
                                <label >110.50₺</label>
                            </div>
                            <button className="width-yüz100 height-3rem background-color-yellow font-size-1rem outline-none border-radius">SİPARİŞ VER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form