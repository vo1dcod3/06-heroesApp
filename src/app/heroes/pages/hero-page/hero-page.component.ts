import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit {


  public hero?: Hero

  constructor (
    private heroesService: HeroService,
    private activateRoute: ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      delay(2000),
      switchMap( ({id}) => this.heroesService.getHeroById( id ) )
    ).subscribe( hero => {
      if( !hero ) return this.router.navigate(['/heroes/list'])
        this.hero = hero;
        return

    })
  }

  goBack():void {
    // this.router.navigate(['/heroes/list']);
    this.router.navigateByUrl('heroes/list')
    }



}
