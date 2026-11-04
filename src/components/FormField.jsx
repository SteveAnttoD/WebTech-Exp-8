export default function FormField({
  label,
  name,
  error,
  children,
  required = true,
}) {
  const errorId = `${name}-error`;

  return (
    <div className="form-field">
      <label htmlFor={name}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && (
        <p className="field-error" id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
