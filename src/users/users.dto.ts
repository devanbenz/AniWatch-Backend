export class CreateUserDto {
    username: string
    password: string
    favorites: Array<Object>
}

export class CreateFavDto {
    username: string
    title: string
    cover_image: string
}