import { Routes,Route,Link } from "react-router-dom"
import Index from "./Index"
import MealForm from "./component/MealForm"
import MealEdit from "./component/MealEdit"
import MealView from "./component/MealView"
function App() {


  return (
    <>
     <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/addmeals" element={<MealForm />} />
        <Route path="/meals/:id/edit" element={<MealEdit />} />
        <Route path="/meals/:id" element={<MealView />} />

        
        

    </Routes>

        
    </>
  )
}

export default App
