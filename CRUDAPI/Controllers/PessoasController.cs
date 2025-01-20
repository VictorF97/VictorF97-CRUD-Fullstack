using CRUDAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace CRUDAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PessoasController : ControllerBase
    {
        private readonly Contexto _contexto;

        public PessoasController(Contexto contexto)
        {
            _contexto = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pessoa>>> BuscaPessoas ()
        {
            try
            {
                var usuarios = await _contexto.Pessoas.AsNoTracking().Take(10).ToListAsync();

                if(usuarios == null){

                return NotFound("Pessoas não localizados no sistema!");
            }

                return usuarios;
            }
            catch (Exception)
            {
                throw new Exception("Ocorreu erro durante a busca por pessoas!");
            }            
        }

        [HttpGet("{pessoaId:int}", Name = "ObterPessoa")]
    public async Task<ActionResult<Pessoa>> BuscaPessoaPorID(int pessoaId)
    {
        try
        {
            var pessoa = _contexto.Pessoas.FirstOrDefault(p => p.PessoaId == pessoaId);

            if (pessoa == null)
            {
                return NotFound("Pessoa não localizada no sistema!");
            }

            return pessoa;
        }
        catch (Exception)
        {
            throw new Exception("Ocorreu erro durante a busca por Pessoas pelo ID!");
        }
        }

    [HttpPost]
    public async Task<ActionResult<Pessoa>> CadastraPessoa(Pessoa pessoa)
    {
        try
        {
            if (pessoa == null)
            {
                return BadRequest();
            }

            _contexto.Pessoas.Add(pessoa);
            _contexto.SaveChanges();

            return new CreatedAtRouteResult("ObterPessoa",
                new { pessoaId = pessoa.PessoaId }, pessoa); // Alterado para "pessoaId"
        }
        catch (Exception)
        {
            throw new Exception("Ocorreu erro durante o cadastro de uma nova pessoa!");
        }
    }

        [HttpPut]
        public async Task<ActionResult> AtualizaPessoa(Pessoa pessoa)
        {
            try
            {
                if (pessoa == null) return BadRequest("A pessoa a ser atualizada não pode ser nula!");

                _contexto.Entry(pessoa).State = EntityState.Modified;
                await _contexto.SaveChangesAsync();

                return Ok(pessoa);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Ocorreu ao atualizar pessoa!");
            }
        }
        
        [HttpDelete("{pessoaId:int}")]
        public ActionResult ExcluiPessoa(int pessoaId)
        {
            try
            {
                var pessoa = _contexto.Pessoas.FirstOrDefault(p => p.PessoaId == pessoaId);

                if (pessoa == null)
                {
                    return NotFound("Pessoa não encontrado!");
                }

                _contexto.Pessoas.Remove(pessoa);
                _contexto.SaveChanges();

                return Ok(pessoa);
            }
            catch (Exception)
            {
                throw new Exception("Ocorreu erro durante a exclusão de um produto!");
            }
        }
    }
}