import { IsArray, IsInt, IsString } from "class-validator";
import { messageType } from "../../domain/entities/validation/messages";

export class PeopleRequestValidation {
  @IsString({
    message: messageType.string,
  })
  private readonly _nombre: string;

  @IsString({
    message: messageType.string,
  })
  private readonly _altura: string;

  @IsString({
    message: messageType.string,
  })
  private readonly _masa: string;

  @IsString({
    message: messageType.string,
  })
  private readonly _color: string;

  @IsString({
    message: messageType.string,
  })
  private readonly _colorPiel: string;

  @IsString({
    message: messageType.string,
  })
  private readonly _colorOjos: string;

  @IsString({
    message: messageType.string,
  })
  private readonly _nacimiento: string;

  @IsString({
    message: messageType.string,
  })
  private readonly _genero: string;

  @IsString({
    message: messageType.string,
  })
  private readonly _planeta: string;

  @IsArray({
    message: messageType.string,
  })
  private readonly _pelicula: string[];

  @IsArray({
    message: messageType.string,
  })
  private readonly _especies: string[];

  @IsArray({
    message: messageType.string,
  })
  private readonly _vehiculos: string[];

  @IsArray({
    message: messageType.string,
  })
  private readonly _naves: string[];

  @IsString({
    message: messageType.string,
  })
  private readonly _fechaCreacion: string;

  @IsString({
    message: messageType.string,
  })
  private readonly _fechaActualizacion: string;

  @IsString({
    message: messageType.string,
  })
  private readonly _url: string;

  constructor(
    nombre: string,
    altura: string,
    masa: string,
    color: string,
    colorPiel: string,
    colorOjos: string,
    nacimiento: string,
    genero: string,
    planeta: string,
    pelicula: string[],
    especies: string[],
    vehiculos: string[],
    naves: string[],
    fechaCreacion: string,
    fechaActualizacion: string,
    url: string
  ) {
    this._nombre = nombre;
    this._altura = altura;
    this._masa = masa;
    this._color = color;
    this._colorPiel = colorPiel;
    this._colorOjos = colorOjos;
    this._nacimiento = nacimiento;
    this._genero = genero;
    this._planeta = planeta;
    this._pelicula = pelicula;
    this._especies = especies;
    this._vehiculos = vehiculos;
    this._naves = naves;
    this._fechaCreacion = fechaCreacion;
    this._fechaActualizacion = fechaActualizacion;
    this._url = url;
  }

  public get nombre(): string {
    return this._nombre;
  }

  public get altura(): string {
    return this._altura;
  }

  public get masa(): string {
    return this._masa;
  }

  public get color(): string {
    return this._color;
  }

  public get colorPiel(): string {
    return this._colorPiel;
  }

  public get colorOjos(): string {
    return this._colorOjos;
  }

  public get nacimiento(): string {
    return this._nacimiento;
  }

  public get genero(): string {
    return this._genero;
  }

  public get planeta(): string {
    return this._planeta;
  }

  public get pelicula(): string[] {
    return this._pelicula;
  }

  public get especies(): string[] {
    return this._especies;
  }

  public get vehiculos(): string[] {
    return this._vehiculos;
  }

  public get naves(): string[] {
    return this._naves;
  }

  public get fechaCreacion(): string {
    return this._fechaCreacion;
  }

  public get fechaActualizacion(): string {
    return this._fechaActualizacion;
  }

  public get url(): string {
    return this._url;
  }
}
