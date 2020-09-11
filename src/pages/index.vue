<template>
  <b-container>
    <h1>InstaViewer</h1>
    <p>View Instagram users and posts online</p>
    <b-form @submit.prevent>
      <b-form-group>
        <b-form-input
          required
          name="username"
          autocomplete="off"
          placeholder="@username"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-button variant="primary" type="submit">Search</b-button>
      </b-form-group>
    </b-form>
  </b-container>
</template>
