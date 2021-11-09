const Formulario = () => {
  return (
    <form>
      <div>
        <label htmlFor="marca">Marca</label>
        <select name="marca">
          <option value="">--Seleccione--</option>
          <option value="Americano">Americano</option>
          <option value="Europeo">Europeo</option>
          <option value="Asiatico">Asiatico</option>
        </select>
      </div>
      <div>
        <label htmlFor="año">Año</label>
        <select name="año">
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </select>
      </div>
      <div>
        <label htmlFor="plan">Plan:</label>
        <input type="radio" name="plan" value="Basico" />
        Basico
        <input type="radio" name="plan" value="Completo" />
        Completo
      </div>
    </form>
  );
};

export default Formulario;
