import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../Models/Pessoa';

const httpOptions = 
{
  headers: new HttpHeaders
  ({
    'Content-type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  url = 'http://localhost:5125/api/pessoas';

  constructor(private http: HttpClient) { }

  BuscaPessoas(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.url)
  }

  BuscaPessoaId(pessoaId: number): Observable<Pessoa> {
    const apiUrl = `${this.url}/${pessoaId}`;

    return this.http.get<Pessoa>(apiUrl);
  }

  CadastraPessoa(pessoa : Pessoa) : Observable<any>{
    return this.http.post<Pessoa>(this.url, pessoa, httpOptions);
  }

  AtualizaPessoa(pessoa : Pessoa) : Observable<any>{
    return this.http.put<Pessoa>(this.url, pessoa, httpOptions);
  }

  ExcluiPessoa(pessoaId : number) : Observable<any>{
    const apiUrl = `${this.url}/${pessoaId}`;

    return this.http.delete<number>(apiUrl, httpOptions);
  }
}