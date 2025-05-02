import React, { useState } from "react";

export default function NutritionGuide() {
  // BMI states
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  // Water intake states
  const [waterWeight, setWaterWeight] = useState("");
  const [waterIntake, setWaterIntake] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiResult = weight / (heightInMeters * heightInMeters);
      setBmi(bmiResult.toFixed(1));
    }
  };

  const calculateWaterIntake = () => {
    if (waterWeight) {
      const intake = waterWeight * 0.033;
      setWaterIntake(intake.toFixed(2));
    }
  };

  return (
    <div className="page-content">
      <h2>Nutrition Guide</h2>
      <p>
        Learn about macronutrients, healthy plate recommendations, and evaluate your BMI and water intake needs.
      </p>

      <section className="card2">
        <h2>Macronutrients</h2>
        <p>Macronutrients are the essential nutrients your body needs in large amounts to function properly, providing energy and supporting bodily functions, and they include carbohydrates, proteins, and fats. </p>
        <h3> Carbohydrates</h3>
        <p> Carbohydrates are the body's main source of energy.

            Examples of carbohydrate-rich foods include potatoes, rice, bread, corn, tortillas, and pasta.</p>

        <h3> Proteins</h3>
        <p> Proteins are essential for building and repairing tissues, as well as supporting various bodily functions.

            Examples of protein-rich foods include beef, pork, chicken, eggs, dairy, seafood, and tofu.</p>

        <h3> Fats</h3>
        <p> Fats provide energy, support hormone production, and aid in the absorption of fat-soluble vitamins.

            Examples of fat-rich foods include vegetable oils, nuts, avocados, and butter.</p>

            <img src="/images/macro.jpg" alt="macro-img"></img>

      </section>

      <section className="card2">
        <h3>Macronutrients</h3>
        <p>When portioning your meals, focus on balancing the nutrients your body needs. An easy way to do this is by using a visual method and following these guidelines:
  
         <p> - Fill half of your plate with vegetables.</p>
          
         <p> - Allocate one-quarter of your plate to carbohydrates.</p>
          
         <p>- Use the remaining quarter for protein-rich foods.</p>
          
         <p>This approach ensures a well-balanced meal while keeping nutrition in check. </p></p>

         <img src="/images/healthy-plate-diagram-4-lg.webp" alt="plate-img"></img>

       </section>


      <section className="card2">
        <h3>BMI Calculator</h3>
        <div className="form-group">
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button onClick={calculateBMI}>Calculate BMI</button>
        {bmi && <p>Your BMI is: <strong>{bmi}</strong></p>}
      </section>

      <section className="card2">
        <h3>Water Intake Calculator</h3>
        <div className="form-group">
          <label>Weight (kg):</label>
          <input
            type="number"
            value={waterWeight}
            onChange={(e) => setWaterWeight(e.target.value)}
          />
        </div>
        <button onClick={calculateWaterIntake}>Calculate Water Intake</button>
        {waterIntake && <p>Recommended: <strong>{waterIntake} liters/day</strong></p>}
      </section>
    </div>
  );
}




