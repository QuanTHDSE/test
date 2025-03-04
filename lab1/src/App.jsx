import { createContext, useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import Orchid from './components/Orchid/Orchid'
import { ThemeContext } from './components/ThemeConext/ThemeContext'
import { NavThemeProvider } from './components/ThemeConext/NavthemeContext'
import Dashboard from './page/Dashboard'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';





// export default function App(){

// var count = 1;
// statue: trang thai
// React 16.8 tro73 ve62 trc => clas component
// Hook:...
// useState, useEffect

//   const [count, setCount] = useState(0)

//   return(
//     <>
//       <h1>Count: {count}</h1>
//       <button className='btn btn-primary' onClick={() => 
//         setCount(count + 1)
//         }>+</button>
//     </>
//   )
// }

function App() {
  const DATA = [
    {
      name: "Orchid 1",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid1.png",
      color: "Pink",
      numberOfLike: 0,
      origin: "Taiwan",
      category: "Cattleya"
    },

    {
      name: "Orchid 2",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid2.png",
      color: "Pink",
      numberOfLike: 0,
      origin: "Taiwan",
      category: "Cattleya"
    },

    {
      name: "Orchid 3",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid3.png",
      color: "Pink",
      numberOfLike: 0,
      origin: "Taiwan",
      category: "Cattleya"
    },

    {
      name: "Orchid 4",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid4.png",
      color: "Pink",
      numberOfLike: 0,
      origin: "Taiwan",
      category: "Cattleya"
    },

    {
      name: "Orchid 5",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "orchid5.png",
      color: "Pink",
      numberOfLike: 0,
      origin: "Taiwan",
      category: "Cattleya"
    },

    {
      name: "Orchid 6",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid6.png",
      color: "Pink",
      numberOfLike: 0,
      origin: "Taiwan",
      category: "Cattleya"
    },

    {
      name: "Orchid 7",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid7.png",
      color: "Pink",
      numberOfLike: 0,
      origin: "Taiwan",
      category: "Cattleya"
    },

    {
      name: "Orchid 8",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid8.png",
      color: "Pink",
      numberOfLike: 0,
      origin: "Taiwan",
      category: "Cattleya"
    },

    {
      name: "Orchid 9",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid9.png",
      color: "Pink",
      numberOfLike: 0,
      origin: "Taiwan",
      category: "Cattleya"
    },

    {
      name: "Orchid 10",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid10.png",
      color: "Pink",
      numberOfLike: 0,
      origin: "Taiwan",
      category: "Cattleya"
    },

    {
      name: "Orchid 11",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid11.png",
      color: "Pink",
      numberOfLike: 0,
      origin: "Taiwan",
      category: "Cattleya"
    },
    {
      name: "Orchid 12",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid12.png",
      color: "Pink",
      numberOfLike: 0,
      origin: "Taiwan",
      category: "Cattleya"
    },
    {
      name: "Orchid 13",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid13.png",
      color: "Pink",
      numberOfLike: 0,
      origin: "Taiwan",
      category: "Cattleya"
    },
    {
      name: "Orchid 14",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid14.png",
      color: "Pink",
      numberOfLike: 0,
      origin: "Taiwan",
      category: "Cattleya"
    },
    {
      name: "Orchid 15",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid15.png",
      color: "Pink",
      numberOfLike: 0,
      origin: "Taiwan",
      category: "Cattleya"
    },
    {
      name: "Orchid 16",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid16.png",
      color: "Pink",
      numberOfLike: 0,
      origin: "Taiwan",
      category: "Cattleya"
    },


  ]

  const [orchids, setOrchids] = useState(DATA)

  // Trạng thái đóng mở của Modal: true false
  const [isShow, setIsShow] = useState(false)
  const [orchid, setOrchid] = useState(null)

  //Thêm 1 bông hoa vào giỏ hàng
  const [cart, setCart] = useState([])

  const data = localStorage.getItem("Cart")
  // const [showCart, setShowCart] = useState(false)
  const { theme, dark, toggle } = useContext(ThemeContext)
  const [selectOrchid, setSelectOrchid] = useState(null)


  // const [users, setUsers] = useState([])

  //useEffect: gọi hàm bên trong khi mảng phụ thuộc thay đổi giá trỉ
  //useEffect(HÀM, []): chỉ gọi hàm đúng 1 lần
  // Hãy sử dụng khi gọi API
  // useEffect(() => {
  //   fetch("https://67ab0e8665ab088ea7e87427.mockapi.io/users")
  //     .then((response) => response.json())
  //     .then((data) => setUsers(data))
  // }, []) // Hàm phụ thuộc


  // useEffect(() => null, [])

  const handleLike = (index) => {
    setOrchids(orchids.map((orchid, i) =>
      i === index
        ? { ...orchid, numberOfLike: orchid.numberOfLike + 1 }
        : orchid
    ))
  }

  const nagivate = useNavigate();

  const handleSelectOrchid = (orchid) => {
    setSelectOrchid(orchid)
    localStorage.setItem("selectOrchid", JSON.stringify(orchid))
    // window.location.href = "/dashboard"
    nagivate('/dashboard')
    
  }

 

  // const handleAddToCart = () => {
  //   const isExist = cart.some(item => item.image === orchid.image)
  //   if (!isExist) {
  //     setCart([...cart, orchid])
  //     localStorage.setItem("Cart", JSON.stringify([...cart, orchid]))
  //   }
  //   setIsShow(false)
  // }
  // const themeContext = crea

  // const MathThatContext = createContext() //Tạo mật thất

  // const SuTo = () =>{
  //   const biTich = "Cuu duong chan kinh"
  //   return(
  //     <SuPhu biTich = {biTich}/>
  //   )
  // }

  // const SuPhu = ({biTich}) =>{
  //   return (
  //     <DeTu/>
  //   )
  // }

  // const NgoaiDao = () => {
  //   const biTich = useContext(MathThatContext)
  //   return(
  //     <h2>{biTich}</h2>
  //   )
  // }

  // export default function App(){
  //   return(
  //     <MathThatContext.Provider value='Cuu duong chan kinh'>
  //     <NgoaiDao/>
  //     </MathThatContext.Provider>
  //   )
  // }

  // const themes = {
  //   dark: {
  //     backgroundColor: 'black',
  //     color: 'white'
  //   },

  //   light: {
  //     backgroundColor: 'white',
  //     color: 'black'

  //   }
  // }

  // const initialState = {
  //   dark: false,
  //   theme: themes.light,
  //   toggle: () => { }
  // }

  // const themeContext = React.createContext(initialState)
  useEffect(() => {
    document.body.style.backgroundColor = theme.backgroundColor;
    document.body.style.color = theme.color;
  }, [theme]);



  return (
    <>

      <NavThemeProvider>
        <Nav />
      </NavThemeProvider>
      <div>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={






            < div style={{


              minHeight: '100vh',
              padding: '76px 0 20px',
              transition: 'background-color 0.3s, color 0.3s',
              width: '100%',


            }}>


              {/* Hiển thị danh sách user */}
              {/* <ul>
        {users.map((item) => <li>{item.name}</li>)}
      </ul> */}
              {/* Hiển thị giỏ hàng */}
              {/* <h2>Giỏ Hàng</h2>
      <ul>
        {cart.map((item) => <li>{item.name}</li>)}
      </ul> */}
              <button
                className={`btn btn-outline-${dark ? 'light' : 'dark'} mb-3`}
                onClick={toggle}
              >
                {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>

              <div className='container-fluid'>
                <div className='row justify-content-center'>
                  {orchids.map((item, index) => (
                    <Orchid
                      key={index}
                      name={item.name}
                      rating={item.rating}
                      image={item.image}
                      category={item.category}
                      isSpecial={item.isSpecial}
                      isNatural={item.isNatural}
                      color={item.color}
                      numberOfLike={item.numberOfLike}
                      origin={item.origin}
                      // onClick={() => {
                      //   setIsShow(true)
                      //   setOrchid(item)

                      // }}
                      onClick={() => handleSelectOrchid(item)}
                      onLike={() => handleLike(index)}
                    />
                  ))}
                </div>
                {orchid && <div className="modal" id="exampleModal" tabindex="-1" style={{ display: isShow ? 'block' : 'none' }}>
                  <div className="modal-dialog">
                    <div className="modal-content" style={{
                      backgroundColor: dark ? theme.backgroundColor : theme.backgroundColor,
                      color: dark ? theme.color : theme.color
                    }}>
                      <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" onClick={() => setIsShow(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className='row'>
                          <div className='col-md-6'>
                            {/* <p>Modal body text goes here.</p> */}
                            <img src={orchid.image} className='img-fluid' />
                          </div>
                          <div className='col-md-6'>
                            <h4>{orchid.name}</h4>
                            <div className='orchid-details'>
                              <p><strong>Rating:</strong> {orchid.rating}</p>
                              <p><strong>Category:</strong> {orchid.category}</p>
                              <p><strong>Color:</strong> {orchid.color}</p>
                              <p><strong>Origin:</strong> {orchid.origin}</p>
                              <p><strong>Likes:</strong> {orchid.numberOfLike}</p>
                            </div>

                          </div>
                        </div>

                      </div>
                      <div className="modal-footer">
                        <button type="button" onClick={() => setIsShow(false)} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>


                        {/* <button type='button' onClick={() =>

                 }></button> */}
                        {/* Spread Operator:
                ...cart => copy toàn bộ mảng cart */}
                        <button type="button" className="btn btn-primary">Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                }
              </div>

            </div>
          } />

        </Routes>

      </div>

    </>

  )
}

export default App
