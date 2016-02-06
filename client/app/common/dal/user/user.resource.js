function UserResource($resource, API_URL) {
  "ngInject";
  let apiUrl = `${API_URL}/friends/:id`;

  return $resource(apiUrl, {id: '@id'});
}

export default UserResource;
