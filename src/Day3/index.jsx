import PropTypes from 'prop-types';
import './index.css';

const InputControl = ({
  name,
  type,
  min,
  max,
  defaultValue,
  unit,
  onInput,
}) => (
  <div className="control">
    <label htmlFor={name}>{`${name}:`}</label>
    <input
      id={name}
      type={type}
      name={name}
      data-unit={unit}
      defaultValue={defaultValue}
      min={min}
      max={max}
      onInput={onInput}
    />
  </div>
);
InputControl.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  unit: PropTypes.string,
  defaultValue: PropTypes.string.isRequired,
  min: PropTypes.string,
  max: PropTypes.string,
  onInput: PropTypes.func,
  onChange: PropTypes.func,
};

const CssVariables = () => {
  const updateProperty = (event) => {
    const { name, dataset, value } = event.target;
    document.documentElement.style.setProperty(
      `--${name}`,
      value + (dataset.unit || '')
    );
  };

  return (
    <div className="py-8 text-center w-full h-screen bg-blue-900 text-white text-xl">
      <h2 className="text-3xl">
        Update CSS Variables with <span className="hl">JS</span>
      </h2>

      <div className="controls my-8 flex flex-wrap">
        <InputControl
          type="range"
          name="spacing"
          min="10"
          max="200"
          defaultValue="10"
          unit="px"
          onInput={updateProperty}
        />
        <InputControl
          type="range"
          name="blur"
          min="0"
          max="25"
          defaultValue="0"
          data-unit="px"
          onInput={updateProperty}
        />
        <InputControl
          type="range"
          name="brightness"
          min="0"
          max="200"
          defaultValue="100"
          data-unit="%"
          onInput={updateProperty}
        />
        <InputControl
          type="range"
          name="contrast"
          min="0"
          max="200"
          defaultValue="100"
          data-unit="%"
          onInput={updateProperty}
        />
        <InputControl
          type="range"
          name="grayscale"
          min="0"
          max="200"
          defaultValue="0"
          data-unit="%"
          onInput={updateProperty}
        />
        <InputControl
          type="range"
          name="hue-rotate"
          min="0"
          max="360"
          defaultValue="0"
          data-unit="deg"
          onInput={updateProperty}
        />
        <InputControl
          type="range"
          name="invert"
          min="0"
          max="200"
          defaultValue="0"
          data-unit="%"
          onInput={updateProperty}
        />
        <InputControl
          type="range"
          name="opacity"
          min="0"
          max="200"
          defaultValue="100"
          data-unit="%"
          onInput={updateProperty}
        />
        <InputControl
          id="saturate"
          type="range"
          name="saturate"
          min="0"
          max="200"
          defaultValue="100"
          data-unit="%"
          onInput={updateProperty}
        />
        <InputControl
          id="sepia"
          type="range"
          name="sepia"
          min="0"
          max="200"
          defaultValue="0"
          data-unit="%"
          onInput={updateProperty}
        />
        <InputControl
          type="color"
          name="base"
          defaultValue="#ffc600"
          onChange={updateProperty}
        />
      </div>

      <img
        src="https://source.unsplash.com/7bwQXzbF6KE/800x500"
        className="m-auto"
      />
    </div>
  );
};

export default CssVariables;
