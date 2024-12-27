import {
  Controller,
  Delete,
  Get,
  Logger,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { FlashcardsService } from './flashcards.service';
import { GoogleOAuthGuard } from 'src/auth/guards/google-oauth.guard';

@Controller('flashcards')
@UseGuards(GoogleOAuthGuard)
export class FlashcardsController {
  private logger = new Logger('FlashcardsController');
  constructor(private flashcardsService: FlashcardsService) {}

  @Get()
  async getFlashcards() {
    this.logger.verbose(`getFlashcards method called`);
    return await this.flashcardsService.getFlashcards();
  }

  @Post()
  async createFlashcard() {
    return await this.flashcardsService.createFlashcard();
  }

  @Delete()
  async deleteFlashcard() {
    return await this.flashcardsService.deleteFlashcard();
  }

  @Get()
  async getGroups() {
    return await this.flashcardsService.getGroups();
  }

  @Post()
  async createGroup() {
    return await this.flashcardsService.createGroup();
  }

  @Delete()
  async deleteGroup() {
    return await this.flashcardsService.deleteGroup();
  }

  @Patch()
  async renameGroup(name: string) {
    return await this.flashcardsService.updateGroup();
  }
}
