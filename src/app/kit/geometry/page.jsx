"use client"
import { useState } from 'react';

function Geometrica() {
    const [figura, setFigura] = useState('');
    const [lado, setLado] = useState('');
    const [base, setBase] = useState('');
    const [altura, setAltura] = useState('');
    const [radio, setRadio] = useState('');
    const [resultado, setResultado] = useState('');

    const handleCalculate = () => {
        let area = 0;
        let perimetro = 0;

        switch (figura) {
            case 'cuadrado':
                area = lado * lado;
                perimetro = lado * 4;
                break;
            case 'rectangulo':
                area = base * altura;
                perimetro = 2 * (base + altura);
                break;
            case 'circulo':
                area = Math.PI * radio * radio;
                perimetro = 2 * Math.PI * radio;
                break;
            default:
                break;
        }

        setResultado(`Área: ${area.toFixed(2)}, Perímetro: ${perimetro.toFixed(2)}`);
    };

    return (
        <div className="flex justify-center items-center h-screen section-kit">
            <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                <select
                    value={figura}
                    onChange={(e) => setFigura(e.target.value)}
                    className="w-full p-2 mb-2 text-xl border border-gray-300 rounded-md"
                >
                    <option value="">Selecciona una figura</option>
                    <option value="cuadrado">Cuadrado</option>
                    <option value="rectangulo">Rectángulo</option>
                    <option value="circulo">Círculo</option>
                </select>

                {figura && (
                    <div className="grid grid-cols-2 gap-2">
                        {figura === 'cuadrado' && (
                            <>
                                <input
                                    type="number"
                                    value={lado}
                                    onChange={(e) => setLado(parseFloat(e.target.value))}
                                    placeholder="Lado"
                                    className="w-full p-2 text-xl border border-gray-300 rounded-md"
                                />
                            </>
                        )}

                        {figura === 'rectangulo' && (
                            <>
                                <input
                                    type="number"
                                    value={base}
                                    onChange={(e) => setBase(parseFloat(e.target.value))}
                                    placeholder="Base"
                                    className="w-full p-2 text-xl border border-gray-300 rounded-md"
                                />
                                <input
                                    type="number"
                                    value={altura}
                                    onChange={(e) => setAltura(parseFloat(e.target.value))}
                                    placeholder="Altura"
                                    className="w-full p-2 text-xl border border-gray-300 rounded-md"
                                />
                            </>
                        )}

                        {figura === 'circulo' && (
                            <>
                                <input
                                    type="number"
                                    value={radio}
                                    onChange={(e) => setRadio(parseFloat(e.target.value))}
                                    placeholder="Radio"
                                    className="w-full p-2 text-xl border border-gray-300 rounded-md"
                                />
                            </>
                        )}
                    </div>
                )}

                <button onClick={handleCalculate} className="w-full mt-4 px-4 py-2 bg-[#0A715B] text-white rounded">
                    Calcular
                </button>

                {resultado && (
                    <div className="mt-4">
                        <p className="text-lg">{resultado}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Geometrica;