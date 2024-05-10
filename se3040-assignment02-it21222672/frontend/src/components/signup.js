import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(email, pass);
            if (user) {
                alert("Account created successfully");
            }
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className="container-fluid" style={{ backgroundImage: `url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAEOAaQDASIAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAEDBAUCBgf/xAA5EAEAAgECBAUCAgcHBQAAAAAAAQIDBBEFEiExBhNBUWEiMnGRBxRCYoGh0RUjcrHB4fAkM1Ky8f/EABoBAQADAQEBAAAAAAAAAAAAAAADBAUCAQb/xAAvEQEAAgECBAQDCAMAAAAAAAAAAQIDBBESITFBBSJRgRNhcRQykaHB0eHwQlKC/9oADAMBAAIRAxEAPwD8jAAVAAAAAAABUAUQAABUAFQAAAVAAAAAAAAAAAAAAAAABUVAAAAAVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUVAAAAAAAAAAAAAVAAVABUAAAVAAVAFEAAAVABUAAAFQAAAVAAABUAFQAFQBUAFQAVFQFQAAAUQAVABUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYi1p2iJmfaHsRM8oEGaumz29Ir/il7jR5J3+uvSJmelp6fwWI0uWY3io1hszpMsdrVn/ADYb4stPurMf5fm5vgyU52geBUQAAAKgAAAAAAKioAAAAAAAAAAAACoACoAKgAACoACoAogAACoAKgAA2NPh5557R9ETtEe8pMWO2W3DUMOmtk+q0zWnp7y3K0pSNqxEfh3/ADXeIid+kRH5RDrzpOEaDDpbcU/Xs+t1eDFq6aLRZcWmpptPmrzYp1Oa9b2m942tyxXpExvPXaPocWDHp4iNt5euTHXfbr03n2iPeZXpWkWre3PNr1vSKzWIx7RtM239evTb0+XVw4+B5bxOj1ufQ54i0UxcWml9NebRtETqtPXePwvi2n1mN2jqtLrdHltp9XhvhyXiuWKbxNMlJ3mt8VsczS1es7TWZjqtReJnYY648PnXpkzT5VYyRGXDjtbmtFZ5OWl5rO0ztE7sX+vftMPe0ZLzFfKxxabz9VpripERNtomd59Ojz7f02/k72GDLpqX602rb+UtK1bUtNbRtMOoxZsVctdu1o+2f9GZqtFF446dRz9lpS171pWJta07ViI3mZ9mbBpdTqMnlYsdptE7W9K1+bTLvY8Gk4Lp51GTbLqrRNccz0ibe1Inryx6yworPdpaLw++p3yW8tI6zP6erj6zT00dcWnmYtqNoyajaYmKTMfTjifj1/2aT3lyXy5MmTJPNe9ptaZ9ZnvLx6OVHNatrzNI2jsioCJUAFQAVFQFQAAAUQAVABUAAAAAAAAAAAAAAAAAAAAAAAeqVm9q1jvMxDp1rWta1iOlY2hp6Su97W/8a7R+Mu7wvgnHONTqY4XoramdLGOdRy5cOOMcZN5rvGW0TO+09t25oKVpjnLbuOZk+zJ/ht/k7PHrXpxnV2rP03xcPvWImYrfBk0WCYr0/ZmOjQ0Wi1/E9Th0XD9Pk1OpzRM0xYtt+WO9rWtMVise8zEO94l4Pxjh+i8N6niWktp9TOjtwnURzY8kWvorT5GSL47Wr9VJiO/7Er1slYyVjfm9fO2y2tTDjmmKK4py8vl0rW8+ZbmnzLR9U+1d56Q29Jr4x4f1HWY51XDLWtbyOaKZNNe09c2iy2+y/vH229Y9a3hvBeO8YnNHC+H59VGDaMt8fl0x0mYiYrOTNatd/jeZauq0us0GfLpdbgy6bUYZiMmLPWa3rvG8T7bT6T6pJmlp4N+Yz63Q20nkZsWWNToNTzTo9XjpNYycu3NiyY53muWvTnpM/MbxMTOn/wDPd9NwPgfirUaeZpwTWang3EeSc9ZthwTaK/8Ab1Wm8+8TGSnelttp+2d4t02p8AeJMWTJW+iz6ilLTFL4bYcdMle8TMWyc0fMenb03mv9qpTeL23WNPp7Z7cNZiPnM7PkK1teYrStrWntFYmZ/k38PDMltrai3JHecdZibTH71u0Ppcnhzj3DtNm1F+EZcWDDSb5LebpKRER3mb3yw4WfWRiiPM5LZJitqafHM8mPfrvmt3mfhBOpvlnbHH7vptP4bodNX4uoyce3p92PfvPy/Jky5tHw/BzzWta9qY8fS2S3pvPf+L5bV6vNrM05stvilY+2lfSsR7N3U3yaiMtslt7zXp22iI6xERHSIcqWdq8NsUxvPVleJeKW1e2PHHDjjpH7iAosUAAAAABUVAAAAAAAAAAAAAAAAUEAAAAAABQQUBAABUAFCBuaSPovP7+38n6n+in7vFvzi4f/AOud+W6GL358eOtr5JtExSkTNp6bdIh+l/o51eh4XquNabiGs02lzcQxaWNPGXLSOuLzYtW1pnki3WJiN21vE6OIjr/KWuK9q8URyjuz/o/rg4L4b8T+J89azeK5ceDn32tj0tPppE/v3nb8nR4tnnifgHgubitrZc+ujBa+r5axbT6rkz5MeeaUiI2mYiloiO159mh4m4jwHw/4b4d4V4XqcWuvFq21M0vjyRGOt7ZptnnHvWLWtttHx+fT0v8AZPHPCPhjQ5eN8P0dsVtHqNZjtmwxknHhm8X0/LkvE1md9t9vT1Vrce8Ztu6THTDtW2S3fnEddvquinN4P8EcNmkxTiGrzYdTkmYrP95qLxqMkTFo9KRytXx9g4bbHwTxDNK3wZ64tNlvWvPN8Vv+oxxvHvHPDQ8f6vS8avGDherx6iOA4LanWabBOO+O+HPyxbNgvjmebytojLHpFt/SeXY8P6ngviDwVfgPFeJafSZ9DkjFS974oz0xYbxnw5cePJPXpvXpHuRjmKxmme/P3TYdTGGazip5t568+vbb5PruJ08TcQwcM1HhbiPD8OjyYeebZq81b1ttNJpNaWjaI6bdP6fJ63WfpC4dkvw/V+I9BfWajly6e2ix4bZNNfH0jHnx5MMRyZd9qzvvzcvpM78bh3ANFfVcmi8R5dPwvHefMza7W4dHOXJHecGkx5Yt+E22dviuXw34e8Nca0eHium4lxTi0ZcePNjvgtqZtkmsRa04ZtMUx7c0bz3j3lzFYraK1jf2d2rXFWIz9Y/xjbf/AKn9Ov0fMYvFOq13FuA04zmy67h2HWY6amutilKTGSZxzktixxWn07xPWJ7THaW1+knhddFxzDrMVK0w8U00WnljasanT7YrxHp25ZfMcUiuonS8RrWK14nitlzVr0rj12O3laiIj5na8f433HH9boPEHgXg2stq9J/avD/IvlwWzY41NprP6pmiMc25uv037ejR+HGHJS9I5TylUy575Zji6R2jpH0/u784cq0bTaPaZj+bq7959o3cqZ3mZ95mUPifSvuhQBivAAAAAAFRUAAAAAFQAAAAAAAAAAAAAAAAAAAAAAAAB7pNItWb1m1YneYidpmPbd4A32dDDrLzPk44rhw2jbkxdN57xN7fdP5s20dY2jb1idv9XKiZiYmO8bTH8HTw5YvWl+Wtu8TW28xvMTHXaf4w2/DskTE456pLZLX+9L1EbR0iI+O3cinPMRWnNad52ivNM7RMzO0fx3/Bk2rOGsVmnPXJO9ZrMZbzk+mIrMd6xtG++3f1bEYsGkil9Rz2z8u9dNW0RMTMTH95au0xHxvv792na0V5d0mLDbLzjlWO89P79F4dOs02o03ENPmjTfquWuXFqLR0ie01rX9qLRvEx2mJmJ7uzn4ZqdTwrLxvgmLT5NNbLn/tTTaLHaNTw202m3L5dpmfJ26xMdt/aN3z+oy5ct6+Zkx3iK15YwzPk0iY35a12jbbtPT/AH9aPiHEeH2z30Wrz6a+fDbBmnBeazkxWj7bf86em26G2K1pi3f07J5z1weXTcp/27+3pH5taYrM7zETv136T3+ZWIiOkRHXp02jf8Viv0xMTTbm5eXfrHTffbvszxotdfriwXz1+ne2k2zxtM9p8ve351WdojsotmuO88F18Xi0W0fFdPeszSeSs58N8OSIyb7TO9MczHx369NSuPT5cs9M0ROGZiMOKs2jU8vLWv1z9kztvO/r2b2bFPD+HajS5sm2r1+q02T9V5q2yaXS6aMkxbUTSeWL3m0bV7xFJ3iOZz70pXHjtXLj/vMf14q2vN4mLzWYv9MV9OaI3nps4r5hr6iZx0yRPS0b45j97faY6ezmtjVZIvaKV7U6fjb1a7A12X4mTaOzwAUAAAAAABUVAAAAAAAAAAAAABUABQQFBAABUABQQUBAABUAFQBs6Tz7ZaY8VLXtk6cle8/P9ZazbrqoxafysFZpfJExqMn7d43+yJjtX393dLzS3FCXFFZnzztDqxkxaWNsFq5dR1i2es70xfu4fn5YccZMt70jJjr5lL2vbNetKzGOJy7Te3r02r7z0cnHlvines9P2ons26ajFfpb6be09v4S3NNq8d42tys7yZ5vERHKsdI9P5+bPM83L0rG1YjpG0z82n1n+nws2tNYrM/TFrWiNo722iZ37+jzHXrExO/t1VpRMIIE2jvtvP8Az1X/AJ0eLZMdPutEfHefyeWtWI3mR7mtY2isxMcsT0iYisz3jaWvqM8UiaU++Y6zH7MfG3qx5dVa3TH9Metp7y1flk6rXRw/Dxfi8AGKAqAAoIKgAqAqKgAqAAACgICggKCAAAAAAAAAAAAAAAAAAAAAAKgCoAPUWvX7bTH4TL15+fbbzLfmxiSMt68omfxGScuaek5Lfm8IObXtbrIAOQAAAAAAAAABUVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUAAAAAAAAAAAAAFQAFBAUEAAFQAFBBQEAAFQAVAAABUAAAFQAAAVABUABQQVABUBUVABUAAAFAQFBAUEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUVAAAAAAAAAAAAABfdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVFQAAAAAAAAAADafkbem0c6jHa8ZOXa8022me0RPv8AID//2Q==")`, backgroundSize: 'cover', minHeight: '100vh' }}>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                        <div className="card-header bg-primary text-white">
                            <h2 className="text-center mb-0">Sign Up</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submit}>
                                <div className="mb-3">
                                    <input type='text' className="form-control" value={name} placeholder='Username' onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <input type='email' className="form-control" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <input type='password' className="form-control" value={pass} placeholder='Password' onChange={(e) => setPass(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary btn-lg btn-block">Sign Up</button>
                                </div>
                            </form>
                            <p className="text-center">Already have an account? <Link to="/login">Log in</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
