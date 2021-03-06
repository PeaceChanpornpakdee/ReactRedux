import React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

export type FormProps = {
  course: any;
  authors: any;
  onSave: any;
  onChange: any;
  saving: boolean;
  errors: any;
};

const CourseForm = (props: FormProps) => {
  const {
    course,
    authors,
    onSave,
    onChange,
    saving = false,
    errors = {},
  } = props;
  return (
    <form onSubmit={onSave}>
      <h2>{course.id ? "Edit" : "Add"} Anime</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        placeholder="Enter Anime Title"
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId || ""}
        defaultOption="Select Author"
        options={authors.map((author) => ({
          value: author.id,
          text: author.name,
        }))}
        onChange={onChange}
        error={errors.author}
      />

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        placeholder="Enter Category"
        onChange={onChange}
        error={errors.category}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

export default CourseForm;
